import Layout from '../components/Layout';
import React, {useState} from 'react';
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
  const [selected,setSelected] = useState({
    category:'-' as '-'|'+',
    tags:[] as string[],
    note:'',
    amount:0
  })
  const onChange = (obj: Partial<typeof selected>)=>{
    setSelected({...selected, ...obj})
  }
  return (
    <MyLayout>
      <CategorySection
        value={selected.category}
        onChange={(category)=> onChange({category})}
      />
      <TagsSection
        value={selected.tags}
        onChange={(tags)=> onChange({tags})}
      />
      <NoteSection
        value={selected.note}
        onChange={(note)=> onChange({note})}
      />
      <NumberPadSection
        value={selected.amount}
        onChange={(amount)=> onChange({amount})}
      />
    </MyLayout>
  );
};

export default Money;