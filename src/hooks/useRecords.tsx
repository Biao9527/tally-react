import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export type RecordItem = {
  category : '-'|'+'
  tagIds:number[]
  note:string
  amount:number
  createdAt:string
}
type newRecordItem = Omit<RecordItem, 'createdAt'>
const useRecords = ()=>{
  const [records,setRecords] = useState<RecordItem[]>([])
  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('record')||'[]'))
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('record',JSON.stringify(records))
  },records)
  const addRecords = (newRecord:newRecordItem)=>{
    if (newRecord.tagIds.length === 0){
      alert('请选择标签')
      return false
    }
    if (newRecord.amount <=0){
      alert('请输入金额')
      return false
    }
    const record = {...newRecord,createdAt:(new Date()).toISOString()}
    setRecords([...records,record])
    return true
  }
  return {records,addRecords}
}

export {useRecords}