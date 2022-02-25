import React, {useState} from 'react';
import Layout from '../components/Layout';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs'

const Tab = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  > ul {
    background: #ffffff;
    display: flex;
    border: 1px solid #999999;
    border-right-color: transparent;
    border-radius: 4px;
    > li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      width: 60px;
      color: #999999;
      font-size: 14px;
      border-right: 1px solid #999999;
      &.selected{
        background: #ff852a;
        color: #ffffff;
      }
    }
  }
`;
const Item = styled.div`
  min-height: 38px;
  background: #ffffff;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  >.note{
      margin-right: auto;
      margin-left: 16px;
      color: #999999;
  }
`

const Statistics = () => {
  const {getName} = useTags()
  const {records} = useRecords()
  const [tabType,setTabType] = useState<'list'| 'chart'>('list')
  const [category, setCategory] = useState<'-' | '+'>('-');
  return (
    <Layout>
      <CategorySection value={category} onChange={value => setCategory(value)}/>
      <Tab>
        <ul>
          <li
            className={tabType === 'list'? 'selected':''}
            onClick={()=>setTabType('list')}
          >列表</li>
          <li className={tabType === 'chart'? 'selected':''}
              onClick={()=>setTabType('chart')}
          >图表</li>
        </ul>
      </Tab>
      <div>
        {records.map(r=>{
          return <Item>
            <span>{r.tagIds.map(id=> <span>{getName(id)}</span>)}</span>
            <span className='note'>备注：{r.note?r.note:'无'}</span>
            <span>￥{r.amount}</span>
          </Item>
        })}
      </div>
    </Layout>
  );
};

export default Statistics;