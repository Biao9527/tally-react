import styled from 'styled-components';
import {NavLink,Outlet} from 'react-router-dom';
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
      >.selected{
        color: #ff852a;
      }
    }
  }
`

const Nav = ()=>{
  return(
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" className={({ isActive }) => "nav" + (isActive ? " selected" : "")}>
            <Icon name='labels'/>
            <p>标签</p>
          </NavLink>
        </li>
        <li>

          <NavLink to="/money" className={({ isActive }) => "nav" + (isActive ? " selected" : "")}>
            <Icon name='money'/>
            <p>记账</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" className={({ isActive }) => "nav" + (isActive ? " selected" : "")}>
            <Icon name='statistics'/>
            <p>统计</p>
          </NavLink>
        </li>
      </ul>
      <Outlet/>
    </NavWrapper>
  )
}

export default Nav