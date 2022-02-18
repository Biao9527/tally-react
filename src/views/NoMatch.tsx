import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = styled.div`
  text-align: center;
  margin: 20px 0;
  >p{
    font-size: 24px;
    margin-bottom: 10px;
  }
  >a{
    padding: 0 4px;
    font-size: 16px;
    color: #999999;
    border-bottom: 1px solid #999999;
  }
`
const NoMatch = () => {
  return (
    <NotFound>
      <p>输入地址有误</p>
      <Link to="/">返回首页</Link>
    </NotFound>
  );
};

export default NoMatch;