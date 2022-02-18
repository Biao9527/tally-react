import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
require('icons/money.svg')
require('icons/labels.svg')
require('icons/statistics.svg')


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
      >.icon{
        width: 2em;
        height: 2em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
    }
  }
`

const Nav = ()=>{
  return(
    <NavWrapper>
      <ul>
        <li>
          <svg className='icon'>
            <use xlinkHref="#labels"/>
          </svg>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <svg className='icon'>
            <use xlinkHref="#money"/>
          </svg>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <svg className='icon'>
            <use xlinkHref="#statistics"/>
          </svg>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav