import React from 'react';
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
        <Title>
          <strong style={{ fontSize: 'inherit' }}>
            Agora crie o seu login e senha!
          </strong>
        </Title>

        <InputBlock className='input-block'>
          <LoginInput
            placeholder='Seu telefone'
            name='telefone'
            id='telefone'
            value={props.phone}
            onChange={(e) => props.setPhone(e.target.value)}
            required
          ></LoginInput>
          <LoginInput
            placeholder='Criar senha'
            type='password'
            name='password'
            required
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
          ></LoginInput>
          <LoginInput
            placeholder='Confirmar senha'
            type='password'
            value={props.confirmPassword}
            onChange={(e) => props.setConfirmPassword(e.target.value)}
            name='confirmPassword'
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
