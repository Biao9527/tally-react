import styled from 'styled-components';
import React, {useState} from 'react';

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
      &.selected{
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

const TagsSection:React.FC = ()=>{
  const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
  const [selectedTags,setSelectedTags] = useState<string[]>([])

  const addTag = ()=>{
    const tagName = window.prompt()
    if (tagName){
      if (tagName.length>5){
        window.alert('标签名过长')
      }else if (tags.indexOf(tagName)>=0){
        window.alert('标签名重复')
      }else {
        setTags([...tags,tagName])
      }
    }else {
      window.alert('标签名不能为空')
    }
  }
  const onToggleTag = (tag:string)=>{
    if (selectedTags.indexOf(tag)>=0){
      setSelectedTags(selectedTags.filter(t => t!== tag))
    }else {
      setSelectedTags([...selectedTags,tag])
    }
  }

  return (
    <Wrapper>
      <div className="new" onClick={addTag}>
        <button>新增标签</button>
      </div>
      <ul>
        {tags.map(tag =>
          <li key={tag}
              onClick={()=>onToggleTag(tag)}
              className={selectedTags.indexOf(tag)>=0 ? 'selected':''}
          >{tag}</li>)}
      </ul>
    </Wrapper>
  )
}

export {TagsSection}