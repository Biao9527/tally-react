import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from './useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  useEffect(()=>{
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
    if (localTags.length === 0){
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'},
      ]
    }
    setTags(localTags)
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('tags',JSON.stringify(tags))
  },tags)
  const findTag = (id: number) => tags.filter(t => t.id === id)[0];
  const findTagIndex = (id: number) => {
    let index = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        index = i;
        break;
      }
    }
    return index
  };
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
  const updateTag = (id: number, {name}: { name: string }) => {
      setTags(tags.map(tag=> tag.id===id?{id:id,name:name}:tag))
  };
  const deleteTag = (id:number)=>{
    setTags(tags.filter(tag => tag.id!== id))
  }
  const getName = (id:number) => {
    const tag = tags.filter(tag=>tag.id === id)[0]
    return tag ? tag.name : false
  }
  return {tags,getName, setTags, addTag,findTag,findTagIndex,updateTag,deleteTag};
};

export {useTags};