import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../hooks/useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';
import {Button} from '../components/Button';

const TagList = styled.ul`
  font-size: 16px;
  max-height: 70vh;
  overflow: auto;

  > li {
    color: #333333;
    background: #ffffff;
    margin-bottom: 12px;
    > a{
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      > .icon {
        height: 24px;
        width: 24px;
        fill: #999;
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 44px;
`;
const Tags = () => {
  const {tags,addTag} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/'+tag.id}>
              {tag.name}
              <Icon name="right"/>
            </Link>
          </li>)}
      </TagList>
      <Wrapper>
        <Button onClick={addTag}>新建标签</Button>
      </Wrapper>
    </Layout>
  );
};

export default Tags;