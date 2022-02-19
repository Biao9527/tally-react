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

type Props = {
  value:'-'| '+'
  onChange: (c: '-'|'+')=>void
}

const CategorySection:React.FC<Props> = (props)=>{
  const categoryMap = {'-':'支出','+':'收入'}
  type Keys = keyof typeof categoryMap
  const categoryList:Keys[] = ['-','+']
  const category = props.value
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c} className={category===c?'selected':''}
              onClick={()=>props.onChange(c)}
          >{categoryMap[c]}</li>
        )}
      </ul>
    </Wrapper>
  )
}
export {CategorySection}