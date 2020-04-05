import React, { useState } from 'react';
import {
  Container,
  Title,
  InputBlock,
  Input,
  RadioButton,
  Question,
  Select,
  InputBox,
} from './styles';
import './styles.css';

export default function NeedHelpForm() {
  const [hasChildren, setHasChildren] = useState();
  return (
    <Container>
      <Title>
        <p>Se você faz parte do grupo de risco, preencha abaixo:</p>
      </Title>
      <form>
        <div>
          <InputBlock
            style={{ flexDirection: 'column', alignItems: 'flex-start' }}
          >
            <p>Quando você nasceu?</p>
            <div style={{ display: 'flex', marginTop: '1.5rem' }}>
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
              backgroundColor: hasChildren ? '#ffff00b3' : 'transparent',
            }}
          >
            sim
          </RadioButton>
          <RadioButton
            onClick={() => setHasChildren(false)}
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
    </Container>
  );
}
