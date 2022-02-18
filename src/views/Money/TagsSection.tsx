import styled from 'styled-components';

const TagsSection = styled.section`
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      background: #999;
      color: #fff;
      line-height: 24px;
      height: 24px;
      border-radius: 12px;
      padding: 0 16px;
      margin-right: 10px;
      margin-top: 4px;
    }
  }

  .new {
    margin-top: 16px;

    > button {
      background: transparent;
      border: none;
      color: #999999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
`;

export {TagsSection}