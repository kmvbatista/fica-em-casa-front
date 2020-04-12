import React from 'react';
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
            placeholder='seu name'
            name='name'
            id='name'
            required
            value={props.name}
            onChange={(e) => props.setName(e.target.value)}
          ></LoginInput>
          <LoginInput
            onChange={(e) => props.setPhone(e.target.value)}
            placeholder='seu telefone'
            name='tel'
            id='tel'
            type='tel'
            value={props.phone}
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
