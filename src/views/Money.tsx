import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';

const TagsSection = styled.section`
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      background: #999;
      color: #fff;
      line-height: 24px;
      height: 24px;
      border-radius: 12px;
      padding: 0 16px;
      margin-right: 10px;
      margin-top: 4px;
    }
  }

  .new {
    margin-top: 16px;
    > button {
      background: transparent;
      border: none;
      color: #999999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
`;
const NotesSection = styled.section`
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  span{
    font-size: 16px;
    padding-left: 16px;
  }
  input{
    height: 40px;
    background: transparent;
    border: none;
  }
  .icon{
     width: 1em;
     height: 1em;
     vertical-align: -0.15em;
     fill: currentColor;
     overflow: hidden;
   }
`;
const CategorySection = styled.section`

`;
const NumberPadSection = styled.section`

`;
const Money = () => {
  return (
    <Layout>
      <TagsSection>
        <div className="new">
          <button>新增标签</button>
        </div>
        <ul>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>

      </TagsSection>
      <NotesSection>
        <label>
          <span>
            <Icon name='remark'/>
            备注：</span>
          <input type="text"/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div>100</div>
        <div className="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
};

export default Money;