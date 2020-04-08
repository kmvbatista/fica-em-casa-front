import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import {
  Container,
  InputBlock,
  LoginInput,
  RegisterButton,
  Title,
} from './styles';

export default function SecondForm(props) {
  return (
    <div className='container'>
      <Container>
        <Title>Agora crie o seu login e senha!</Title>

        <InputBlock className='input-block'>
          <LoginInput
            placeholder='Seu telefone'
            name='telefone'
            id='telefone'
            required
          ></LoginInput>
          <LoginInput
            placeholder='Criar senha'
            name='password'
            id='password'
            required
          ></LoginInput>
          <LoginInput
            placeholder='Confirmar senha'
            name='password'
            id='password'
            required
          ></LoginInput>
          <RegisterButton onClick={() => props.handleSubmit()}>
            Cadastrar
          </RegisterButton>
        </InputBlock>
      </Container>
    </div>
  );
}
