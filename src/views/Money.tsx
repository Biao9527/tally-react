import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {useRecords} from '../hooks/useRecords';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
const selectedInitial ={
  category:'-' as '-'|'+',
  tagIds:[] as number[],
  note:'',
  amount:0
}
const Money = () => {
  const [selected,setSelected] = useState(selectedInitial)
  const {addRecords} = useRecords()
  const onChange = (obj: Partial<typeof selected>)=>{
    setSelected({...selected, ...obj})
  }
  const submit = ()=>{
    if (addRecords(selected)){
      alert('保存成功')
      setSelected(selectedInitial)
    }
  }
  return (
    <MyLayout>
      {selected.amount}
      <CategorySection
        value={selected.category}
        onChange={(category)=> onChange({category})}
      />
      <TagsSection
        value={selected.tagIds}
        onChange={(tagIds)=> onChange({tagIds})}
      />
      <NoteSection
        value={selected.note}
        onChange={(note)=> onChange({note})}
      />
      <NumberPadSection
        value={selected.amount}
        onChange={(amount)=> onChange({amount})}
        onOK={submit}
      />
    </MyLayout>
  );
};

export default Money;