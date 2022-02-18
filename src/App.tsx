import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

export default function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Routes>
            <Route path="/" element={<Navigate to="/money"/>}/>
            <Route path="/tags" element={<Tags/>}/>
            <Route path="/money" element={<Money/>}/>
            <Route path="/statistics" element={<Statistics/>}/>
            <Route path="*" element={<NoMatch/>}/>
          </Routes>
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

function NoMatch() {
  return <div>地址有误</div>;
}

function Statistics() {
  return <h2>统计页面</h2>;
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}