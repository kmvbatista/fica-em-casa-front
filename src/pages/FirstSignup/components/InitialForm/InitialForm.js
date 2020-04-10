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

export default function InitialForm(props) {
  return (
    <div className='container'>
      <Container>
        <Title>Faça o seu cadastro para continuar...</Title>

        <InputBlock className='input-block'>
          <LoginInput
            placeholder='seu nome'
            name='nome'
            id='nome'
            required
          ></LoginInput>
          <LoginInput
            placeholder='seu email'
            name='email'
            id='email'
            required
          ></LoginInput>
          <LoginInput
            placeholder='seu endereço'
            name='password'
            id='password'
            required
          ></LoginInput>
          <RegisterButton onClick={() => props.handleSubmit()}>
            cadastrar-se
          </RegisterButton>
        </InputBlock>
      </Container>
    </div>
  );
}
