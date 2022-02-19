import styled from 'styled-components';
import React from 'react';
import Icon from '../../components/Icon';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 16px;

  > label {
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

  }
`;

const NotesSection: React.FC = () => {
  return (
    <Wrapper>
      <label>
          <span>
            <Icon name="remark"/>
            备注：
          </span>
        <input type="text" placeholder="在这里输入备注"/>
      </label>
    </Wrapper>
  );
};
export {NotesSection};