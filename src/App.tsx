import React from 'react';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import NoMatch from 'views/NoMatch';
import Money from 'views/Money';
import Statistics from 'views/Statistics';
import Tags from 'views/Tags';
import {Tag} from './views/Tag';
import styled from 'styled-components';


const AppWrapper = styled.div`
  max-width: 500px;
  margin: auto;
`
export default function App() {
  return (
    <AppWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/money"/>}/>
          <Route path="/tags" element={<Tags/>}/>
          <Route path="/tags/:id" element={<Tag/>}/>
          <Route path="/money" element={<Money/>}/>
          <Route path="/statistics" element={<Statistics/>}/>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </Router>
    </AppWrapper>
  );
}
