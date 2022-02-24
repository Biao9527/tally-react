import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
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

  > .icon {
    width: 30px;
    height: 30px;
    fill: #f0e0dc;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 44px;
  margin-top: 8px;
  padding: 0 16px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 44px;
`;
type Params = {
  id: string
}
const Tag: React.FC = () => {
  const navigate = useNavigate();
  const {findTag, updateTag, deleteTag} = useTags();
  const {id:idString} = useParams<Params>();
  const tag = findTag(parseInt(idString!)) || {id:-1,name:''};
  const onClickBack = ()=>{
    navigate('/tags')
  }
  const finish = ()=>{
    console.log(111);
  }
  return (
    <Layout>
      <Header>
        <Icon name="left" onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon name="finish" onClick={finish}/>
      </Header>
          <InputWrapper>
            <Input
              label="标签名"
              type="text"
              placeholder="标签名"
              value={tag.name}
              onChange={(e) => {
                updateTag(tag.id, {name: e.target.value});
              }}
            />
          </InputWrapper>
          <ButtonWrapper>
            <Button onClick={() => {
              deleteTag(tag.id)
            }}>删除标签</Button>
          </ButtonWrapper>
    </Layout>
  );
};

export {Tag};