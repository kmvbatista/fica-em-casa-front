import React, { useState } from 'react';
import {
  Container,
  Title,
  InputBlock,
  Input,
  RadioButton,
  Question,
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
              <Input type='number' />
              <Input type='number' />
              <Input type='number' />
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
        <InputBlock>
          <Question>Quantos?</Question>
          <Input type='number' />
        </InputBlock>
        <InputBlock>
          <Question>Faixa Etária?</Question>
          <Input type='sel' />
        </InputBlock>
        <InputBlock>
          <Question>Quantos moram com você?</Question>
          <Input type='number' />
        </InputBlock>
      </form>
    </Container>
  );
}
