import styled from 'styled-components';

const Tab = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;

  > ul {
    background: #ffffff;
    display: flex;
    border: 1px solid #999999;
    border-right-color: transparent;
    border-radius: 4px;

    > li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      width: 60px;
      color: #999999;
      font-size: 14px;
      border-right: 1px solid #999999;

      &.selected {
        background: #ff852a;
        color: #ffffff;
      }
    }
  }
`;

export {Tab}