import React, {useState} from 'react';
import {NumberWrapper} from './NumberPadSection/NumberWrapper';

const NumberPadSection: React.FC = () => {
  const [input, setInput] = useState('0');
  const onClickNumberWrapper = (e: React.MouseEvent) => {
    const buttonText = (e.target as HTMLButtonElement).textContent;
    if (buttonText === null) {
      return;
    }
    if (input.length < 16) {
      if ('0123456789'.indexOf(buttonText) >= 0) {
        if (input === '0') {
          setInput(buttonText);
        } else {
          setInput(input + buttonText);
        }
      }
      if (buttonText === '.') {
        if (input.indexOf('.') >= 0) {
          return;
        } else {
          setInput(input + buttonText);
        }
      }
    }
    if (buttonText === '删除') {
      if (input.length === 1) {
        setInput('0');
      } else {
        setInput(input.slice(0, -1));
      }
    }
    if (buttonText === '清空') {
      setInput('0');
    }
  };
  return (
    <NumberWrapper>
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
    </NumberWrapper>
  );
};
export {NumberPadSection};