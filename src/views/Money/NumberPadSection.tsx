import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  > .number {
    font-size: 32px;
    text-align: right;
    padding: 9px 16px;
    background: #ffffff;
    font-family: Consolas, monospace;
    box-shadow: inset 0 -3px 3px -3px fade-out(black, 0.7),
    inset 0 3px 3px -3px fade-out(black, 0.7);
  }

  > .buttons {
    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;

      &:nth-child(1) {
        background: #f2f2f2;
      }

      &:nth-child(2), &:nth-child(5) {
        background: #e8e8e8;
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: #dedede;
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: #d3d3d3;
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: #c9c9c9;
      }

      &:nth-child(14) {
        background: #bfbfbf;
      }

      &.ok {
        float: right;
        height: 128px;
        background: #b5b5b5;
      }

      &.zone {
        width: 50%;
      }
    }
  }
`;

const NumberPadSection: React.FC = () => {
  const [input,setInput] = useState('0')
  const onClickNumberWrapper = (e:React.MouseEvent)=>{
      const buttonText = (e.target as HTMLButtonElement).textContent
    if(buttonText === null){return}
    if (input.length<16){
      if ('0123456789'.indexOf(buttonText)>=0){
        if (input === '0'){
          setInput(buttonText)
        }else {
          setInput(input+buttonText)
        }
      }
      if (buttonText === '.'){
        if (input.indexOf('.')>=0){
          return;
        }else {
          setInput(input+buttonText)
        }
      }
    }
    if (buttonText === '删除'){
      if (input.length === 1){
        setInput('0')
      }else {
        setInput(input.slice(0,-1))
      }
    }
    if (buttonText === '清空'){
      setInput('0')
    }
  }
  return (
    <Wrapper>
      <div className="number">{input}</div>
      <div className="buttons clearFix" onClick={onClickNumberWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zone">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};
export {NumberPadSection};