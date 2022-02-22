import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTag = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'},
];
const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTag);
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
  const updateTag = (id: number, obj: { name: string }) => {
      const index = findTagIndex(id)
    //深拷贝
      let tagClone = JSON.parse(JSON.stringify(tags))
      tagClone.splice(index,1,{id:id,name: obj.name})
      setTags(tagClone)
  };
  const deleteTag = (id:number)=>{
    const index = findTagIndex(id)
    //深拷贝
    let tagClone = JSON.parse(JSON.stringify(tags))
    tagClone.splice(index,1)
    setTags(tagClone)
  }
  return {tags, setTags, findTag,findTagIndex,updateTag,deleteTag};
};

export {useTags};