import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
const Money = () => {
  return (
    <MyLayout>
      <CategorySection/>
      <TagsSection/>
      <NotesSection/>
      <NumberPadSection/>
    </MyLayout>
  );
};

export default Money;