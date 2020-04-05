import React, { useState } from 'react';
import {
  Title,
  InputBlock,
  Input,
  RadioButton,
  Question,
  Select,
  InputBox,
} from './styles';
import { useHistory } from 'react-router-dom';
import { PinkContainer } from '../../globalComponents';

export default function NeedHelpForm() {
  const [hasChildren, setHasChildren] = useState();
  const history = useHistory();

  return (
    <PinkContainer>
      <Title>Se você faz parte do grupo de risco, preencha abaixo</Title>
      <form>
        <div>
          <InputBlock
            style={{ flexDirection: 'column', alignItems: 'flex-start' }}
          >
            <Question style={{ width: '100%' }}>Quando você nasceu?</Question>
            <div style={{ display: 'flex', marginTop: '1.2em' }}>
              <InputBox>
                <Input type='number' />
              </InputBox>
              <InputBox>
                <Input type='number' />
              </InputBox>
              <InputBox>
                <Input type='number' />
              </InputBox>
            </div>
          </InputBlock>
        </div>
        <InputBlock>
          <Question>Você tem filhos?</Question>
          <RadioButton
            onClick={() => setHasChildren(true)}
            className='radio'
            style={{
              backgroundColor: hasChildren ? '#ffff0099' : 'transparent',
            }}
          >
            sim
          </RadioButton>
          <RadioButton
            onClick={() => {
              setHasChildren(false);
              history.push('/need-help-options');
            }}
            style={{
              backgroundColor:
                hasChildren == false ? '#ffff00b3' : 'transparent',
            }}
            className='radio'
          >
            não
          </RadioButton>
        </InputBlock>
        <div
          style={{
            transition: 'opacity .8s',
            opacity: !hasChildren ? 0 : 1,
          }}
        >
          <InputBlock>
            <Question>Quantos?</Question>
            <InputBox>
              <Input type='number' />
            </InputBox>
          </InputBlock>
          <InputBlock>
            <Question>Faixa Etária?</Question>
            <Select name='childrenAge' id='childrenAge'>
              <option value='10'>até 10 anos</option>
              <option value='20'>até 20 anos</option>
              <option value='30'>até 30 anos</option>
              <option value='40'>até 40 anos</option>
            </Select>
          </InputBlock>
          <InputBlock>
            <Question>Quantos moram com você?</Question>
            <InputBox>
              <Input type='number' />
            </InputBox>
          </InputBlock>
        </div>
      </form>
    </PinkContainer>
  );
}
