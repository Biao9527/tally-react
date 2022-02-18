import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';



const NavWrapper = styled.nav`
  background: #ffffff;
  >ul{
    display: flex;
    >li{
      font-size: 14px;
      width: 33.3333%;
      text-align: center;
      margin-top: 5px;
      color: #999999;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`

const Nav = ()=>{
  return(
    <NavWrapper>
      <ul>
        <li>
          <Icon name='labels'/>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Icon name='money'/>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Icon name='statistics'/>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav