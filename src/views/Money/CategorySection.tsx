import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  > ul {
    display: flex;
    font-size: 20px;
    text-align: center;
    background: #ff6200;
    color: #f0e0dc;

    > li {
      width: 50%;
      height: 56px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 100%;
        background: #333333;
      }
    }
  }
`;

const CategorySection:React.FC = ()=>{
  return (
    <Wrapper>
      <ul>
        <li className="selected">支出</li>
        <li>收入</li>
      </ul>
    </Wrapper>
  )
}
export {CategorySection}