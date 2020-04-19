import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Subtitle,
  Title,
  Welcome,
  InitialForm,
  LoginInput,
  RegisterButton,
} from './styles';

export default function Login() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const history = useHistory();

  const handleSubmit = async () => {
    history.push('second-signup', { name, phone });
  };

  return (
    <Container>
      <Welcome>
        <Title style={{ color: 'var(--color-white)' }}>Oi, tudo bem?</Title>
        <Subtitle>
          Sabemos que não muito, né :(<br></br>Mas esse app foi feito justamente
          para nos ajudarmos nesse momento tão complicado
        </Subtitle>
      </Welcome>
      <InitialForm>
        <Title>Faça o seu cadastro para continuar...</Title>

        <LoginInput
          placeholder='seu nome'
          name='name'
          id='name'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></LoginInput>
        <LoginInput
          onChange={(e) => setPhone(e.target.value)}
          placeholder='seu telefone'
          name='tel'
          id='tel'
          type='tel'
          value={phone}
          required
        ></LoginInput>
        <RegisterButton onClick={() => handleSubmit()}>
          cadastrar-se
        </RegisterButton>
      </InitialForm>
    </Container>
  );
}
