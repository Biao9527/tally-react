import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

const NavWrapper = styled.nav`
  background: #ffffff;
  >ul{
    display: flex;
    >li{
      width: 33.3333%;
      text-align: center;
      padding: 16px 0;
      color: #999999;
    }
  }
`

const Nav = ()=>{
  return(
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav