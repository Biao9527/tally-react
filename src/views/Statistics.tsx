import React, {useState} from 'react';
import Layout from '../components/Layout';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';
import {Tab} from '../components/Tab';
import {beautifyDay} from '../lib/beautifyDay';
import Page from '../components/Chart';

const Item = styled.div`
  > h3 {
    padding: 6px 16px;
    font-size: 18px;
    background: #ff852a;
    color: #f2f2f2;
  }

  > .result {
    min-height: 38px;
    background: #ffffff;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;

    > .note {
      margin-right: auto;
      margin-left: 16px;
      color: #999999;
    }
  }
`;
const List = styled.div`
  margin-top: 20px;

  > .notFound {
    display: flex;
    justify-content: center;
  }
`;

const Statistics = () => {
  const {getName} = useTags();
  const {records} = useRecords();
  const [tabType, setTabType] = useState<'list' | 'chart'>('list');
  const [category, setCategory] = useState<'-' | '+'>('-');
  const selectedCategory = records.filter(r => r.category === category);
  const hash: { [K: string]: RecordItem[] } = {};
  selectedCategory.forEach(r => {
    const key = day(r.createdAt).format('YYYY-MM-DD');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
    hash[key] = hash[key].sort((a, b) => {
      if (a.createdAt === b.createdAt) return 0;
      if (a.createdAt > b.createdAt) return -1;
      if (a.createdAt < b.createdAt) return 1;
      return 0;
    });
  });
  const array = Object.entries(hash).sort((a, b) => {
    if (a === b) return 0;
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });
  const showList = (array: [x: string, y: RecordItem[]][]) => {
    if (array.length > 0) {
      if (tabType === 'list') {
        return (
          <>
            {array.map(x => {
              return (<Item key={x[0]}>
                <h3>{beautifyDay(x[0])}</h3>
                {x[1].map(r => {
                  if(r.tagIds.map(t=>getName(t))[0] !== false){
                    return (<div className="result" key={r.createdAt}>
                      <span>{r.tagIds.length > 1 ?
                        r.tagIds.map(t => <span key={t}>{getName(t) + ' '}</span>) :
                        r.tagIds.map(t => <span key={t}>{getName(t)}</span>)}
                      </span>
                      <span className="note">备注：{r.note ? r.note : '无'}</span>
                      <span>{category + '￥' + r.amount}</span>
                    </div>)
                  }else {
                    return null
                  }
                })}
              </Item>);
            })}
          </>
        );
      } else if (tabType === 'chart') {
        return <Page category={category}/>;
      }
    } else {
      return (<div className="notFound">暂无数据</div>);
    }
  };

  return (
    <Layout>
      <CategorySection value={category} onChange={value => setCategory(value)}/>
      <Tab>
        <ul>
          <li
            className={tabType === 'list' ? 'selected' : ''}
            onClick={() => setTabType('list')}
          >列表
          </li>
          <li className={tabType === 'chart' ? 'selected' : ''}
              onClick={() => setTabType('chart')}
          >图表
          </li>
        </ul>
      </Tab>
      <List>
        {showList(array)}
      </List>
    </Layout>
  );
};

export default Statistics;