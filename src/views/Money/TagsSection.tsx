import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../hooks/useTags';

const Wrapper = styled.section`
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

      &.selected {
        background: #FF6200;
      }
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

type Props = {
  value:number[]
  onChange: (tagId: number[])=>void
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags,addTag} = useTags()
  const selectedTags = props.value
  const onToggleTag = (tagId: number) => {
    if (selectedTags.indexOf(tagId) >= 0) {
      props.onChange(selectedTags.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTags, tagId]);
    }
  };

  return (
    <Wrapper>
      <div className="new" onClick={addTag}>
        <button>新增标签</button>
      </div>
      <ul>
        {tags.map(tag =>
          <li key={tag.id}
              onClick={() => onToggleTag(tag.id)}
              className={selectedTags.indexOf(tag.id) >= 0 ? 'selected' : ''}
          >{tag.name}</li>)}
      </ul>
    </Wrapper>
  );
};

export {TagsSection};