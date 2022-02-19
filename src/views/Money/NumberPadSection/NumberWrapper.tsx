import styled from 'styled-components';

const NumberWrapper = styled.section`
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

export {NumberWrapper}