import styled from 'styled-components';
import React from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 16px;
`;

type Props = {
  value:string
  onChange:(string:string)=>void
}

const NoteSection: React.FC<Props> = (props) => {
  const note = props.value
  return (
    <Wrapper>
      <Input label='备注'
             type='text'
             placeholder='在这里输入备注'
             value={note}
             onChange={(e)=>props.onChange(e.target.value)}/>
    </Wrapper>
  );
};
export {NoteSection};