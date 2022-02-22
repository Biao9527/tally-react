import React from 'react';
import Icon from './Icon';
import styled from 'styled-components';

const Label = styled.label`
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
      font-size: 16px;
      > .icon {
        margin-right: 5px;
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
    }
    > input {
      height: 40px;
      width: 100%;
      background: transparent;
      border: none;
    }
`

type Props= {
  label:string
}&React.InputHTMLAttributes<HTMLInputElement>
const Input:React.FC<Props> = (props)=>{
  const {label,children,...rest} = props
  return (
    <Label>
          <span>
            <Icon name="remark"/>
            {label+'：'}
          </span>
      <input {...rest}/>
    </Label>
  )
}

export {Input}

