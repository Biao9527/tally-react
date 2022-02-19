import React, {useState} from 'react';
import {NumberWrapper} from './NumberPadSection/NumberWrapper';

type Props = {
  value: number
  onChange: (amount: number) => void
}
const NumberPadSection: React.FC<Props> = (props) => {
  const output = props.value.toString();
  const [_output, set_output] = useState(output);
  const onClickNumberWrapper = (e: React.MouseEvent) => {
    const buttonText = (e.target as HTMLButtonElement).textContent;
    if (buttonText === null) {
      return;
    }
    if (_output.length < 16) {
      if ('0123456789'.indexOf(buttonText) >= 0) {
        if (_output === '0') {
          set_output(buttonText);
        } else {
          set_output(_output + buttonText);
        }
      }
      if (buttonText === '.') {
        if (_output.indexOf('.') >= 0) {
          return;
        } else {
          set_output(_output + buttonText);
        }
      }
    }
    if (buttonText === '删除') {
      if (_output.length === 1) {
        set_output('0');
      } else {
        set_output(_output.slice(0, -1));
      }
    }
    if (buttonText === '清空') {
      set_output('0');
    }
    if (buttonText === 'OK') {
      props.onChange(parseFloat(_output));
    }
  };
  return (
    <NumberWrapper>
      <div className="number">{_output}</div>
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