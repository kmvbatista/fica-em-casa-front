import React from 'react';
import { Container, Title, InputBlock, Input, Span } from './styles';
import './styles.css';

export default function NeedHelpForm() {
  return (
    <Container>
      <Title>
        <p>Se você faz parte do grupo de risco, preencha abaixo:</p>
      </Title>
      <form>
        <div>
          <InputBlock style={{ flexDirection: 'column' }}>
            <p>Quando você nasceu?</p>
            <div style={{ display: 'flex' }}>
              <Input type='number' />
              <Input type='number' />
              <Input type='number' />
            </div>
          </InputBlock>
        </div>
        <InputBlock>
          <p>Você tem filhos?</p>
          <div style={{ display: 'inline-block', marginLeft: '1.5em' }}>
            <input
              type='radio'
              name='children'
              id='sim'
              style={{ visibility: 'hidden' }}
            />
            <label
              htmlFor='sim'
              style={{ cursor: 'pointer', position: 'relative' }}
            >
              <Span></Span>
              sim
            </label>
          </div>
          <div style={{ display: 'inline-block', marginLeft: '1.5em' }}>
            <input
              type='radio'
              name='children'
              id='nao'
              style={{ visibility: 'hidden' }}
            />
            <label
              htmlFor='nao'
              style={{ cursor: 'pointer', position: 'relative' }}
            >
              <Span></Span>
              não
            </label>
          </div>
        </InputBlock>
        <InputBlock>
          <p>Quantos?</p>
          <Input type='number' />
        </InputBlock>
        <InputBlock>
          <p>Faixa Etária?</p>
          <Input type='text' />
        </InputBlock>
        <InputBlock>
          <p>Quantos moram com você?</p>
          <Input type='number' />
        </InputBlock>
      </form>
    </Container>
  );
}
