import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
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
      <NoteSection/>
      <NumberPadSection/>
    </MyLayout>
  );
};

export default Money;