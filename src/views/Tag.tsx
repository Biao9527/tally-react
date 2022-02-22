import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from '../useTags';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Input} from '../components/Input';
import {Button} from '../components/Button';

const Header = styled.header`
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  font-size: 20px;
  color: #f0e0dc;
  background: #ff6200;
  padding: 0 10px;
  >.icon{
    width: 30px;
    height: 30px;
    fill: #f0e0dc;
  }
`
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 44px;
  margin-top: 8px;
  padding: 0 16px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 44px;
`
type Params = {
  id: string
}
const Tag: React.FC = () => {
  const {findTag} = useTags();
  const {id} = useParams<Params>();
  const tag = findTag(parseInt(id!));
  return (
    <Layout>
      <Header>
        <Icon name='left'/>
        <span>编辑标签</span>
        <Icon name='finish'/>
      </Header>
      <InputWrapper>
        <Input label='标签名' type='text' value={tag.name}/>
        </InputWrapper>
        <ButtonWrapper>
          <Button>删除标签</Button>
        </ButtonWrapper>
    </Layout>
  );
};

export {Tag};