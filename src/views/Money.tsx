import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {CategorySection} from './Money/CategorySection';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
const Money = () => {
  return (
    <MyLayout>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
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
            <Icon name="remark"/>
            备注：
          </span>
          <input type="text" placeholder="在这里输入备注"/>
        </label>
      </NotesSection>
      <NumberPadSection>
        <div className="number">100</div>
        <div className="buttons clearFix">
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
          <button className="ok">OK</button>
          <button className="zone">0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  );
};

export default Money;