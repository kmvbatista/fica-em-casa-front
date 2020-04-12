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

export default function ThirdForm(props) {
  return (
    <div className='container'>
      <Container>
        <Title>
          <strong style={{ fontSize: 'inherit' }}>Faça o seu login</strong>
        </Title>

        <InputBlock className='input-block'>
          <LoginInput
            placeholder='Seu telefone'
            name='phone'
            id='phone'
            required
            value={props.phone}
            onChange={(e) => props.setPhone(e.target.value)}
          ></LoginInput>
          <LoginInput
            placeholder='Sua senha'
            name='password'
            id='password'
            required
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
          ></LoginInput>
          <RegisterButton onClick={() => props.handleSubmit()}>
            Acessar
          </RegisterButton>
        </InputBlock>
      </Container>
    </div>
  );
}
