import styled from 'styled-components';
import {Link,Outlet} from 'react-router-dom';
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
          <Link to="/tags">
            <Icon name='labels'/>
            <p>标签</p>
          </Link>
        </li>
        <li>

          <Link to="/money">
            <Icon name='money'/>
            <p>记账</p>
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon name='statistics'/>
            <p>统计</p>
          </Link>
        </li>
      </ul>
      <Outlet/>
    </NavWrapper>
  )
}

export default Nav