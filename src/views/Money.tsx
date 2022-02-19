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
  return (
    <MyLayout>
      {selected.category}
      <hr/>
      {selected.tags}
      <hr/>
      {selected.note}
      <hr/>
      {selected.amount}
      <CategorySection
        value={selected.category}
        onChange={(category)=> setSelected({...selected, category: category})}
      />
      <TagsSection
        value={selected.tags}
        onChange={(tags)=> setSelected({...selected,tags: tags})}
      />
      <NoteSection
        value={selected.note}
        onChange={(note)=> setSelected({...selected,note:note})}
      />
      <NumberPadSection
        value={selected.amount}
        onChange={(amount)=> setSelected({...selected,amount: amount})}
      />
    </MyLayout>
  );
};

export default Money;