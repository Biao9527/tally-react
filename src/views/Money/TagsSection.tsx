import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../useTags';
import {createId} from '../../lib/createId';

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
  const {tags,setTags} = useTags()
  const selectedTags = props.value
  const addTag = () => {
    const tagName = window.prompt();

    if (tagName !== null) {
      if (tagName.length > 5) {
        window.alert('标签名过长');
        return
      } else if (tags.map(tagName => tagName.name).indexOf(tagName) >= 0) {
        window.alert('标签名重复');
        return;
      } if (tagName === '') {
        window.alert('标签名不能为空');
        return;
      }else {
        setTags([...tags, {id:createId(),name:tagName}]);
      }
    }
  };
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