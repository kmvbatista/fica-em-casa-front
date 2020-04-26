import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { loginUser } from '../../services/sessionService';
import { Row } from '../../globalComponents';

import swal from 'sweetalert';
import {
  Welcome,
  InitialForm,
  LoginInput,
  RegisterButton,
  Title,
  Container,
} from '../FirstSignup/styles';
import LoaderContainer from '../../components/LoaderContainer';

export default function Login() {
  const [login, setlogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async () => {
    const dataToSend = { login, password };
    try {
      setIsLoading(true);
      await loginUser(dataToSend);
      history.replace('/');
    } catch (error) {
      setIsLoading(false);
      swal(
        `${
          error.response
            ? error.response.data.error
            : 'Senha ou email inválidos!'
        }`,
        'Tente novamente.',
        'error',
      );
    }
  };

  return (
    <Container style={{ padding: 0 }}>
      <Welcome
        style={{
          backgroundColor: 'var(--color-pink)',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
        }}
      >
        <img
          style={{ width: '10em', height: '10em', marginBottom: '2em' }}
          src='./logo.png'
          alt='Fica em Casa'
        />
        <div style={{ fontSize: '5em' }}>
          <strong>Fica</strong> em <strong>casa</strong>
        </div>
      </Welcome>
      <InitialForm>
        <Title>
          <strong style={{ fontSize: '1.5em' }}>Faça o seu login</strong>
        </Title>
        <LoginInput
          placeholder='seu email ou telefone'
          name='login'
          id='login'
          required
          value={login}
          onChange={(e) => setlogin(e.target.value)}
        ></LoginInput>
        <LoginInput
          placeholder='sua senha'
          name='password'
          type='password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></LoginInput>
        <LoaderContainer color={'var(--color-pink)'} isLoading={isLoading}>
          <RegisterButton
            onClick={() => {
              handleSubmit();
            }}
          >
            Acessar
          </RegisterButton>
        </LoaderContainer>
        <Row style={{ justifyContent: 'space-around', width: '100%' }}>
          <Link style={{ textAlign: 'center' }} to='first-signup'>
            Cadastrar-se
          </Link>
          <Link style={{ textAlign: 'center' }} to='forgot-password'>
            Esqueci minha senha
          </Link>
        </Row>
      </InitialForm>
    </Container>
  );
}
