import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as SessionService from '../../services/sessionService';
import { Row, Column } from '../../globalComponents';

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
import InputMask from 'react-input-mask';
import PhoneInput from '../../components/PhoneInput';

export default function Login() {
  const [login, setlogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isInsertingToken, setIsInsertingToken] = useState(false);
  const [loginWithPhone, setLoginWithPhone] = useState(false);
  const history = useHistory();

  function handleButtonClick() {
    if (isInsertingToken) {
      return sendConfirmation();
    }
    return sendToken();
  }

  async function sendToken() {
    if (!isFormValid()) {
      return;
    }
    try {
      setIsLoading(true);
      await SessionService.sendForgotPwdToken(login);
      setIsLoading(false);
      swal('Código enviado com sucesso', '', 'success');
      setIsInsertingToken(true);
    } catch (error) {
      setIsLoading(false);
      swal(
        `${
          error.response
            ? error.response.data.error
            : 'Houve um erro na sua requisição!'
        }`,
        'Tente novamente.',
        'error',
      );
    }
  }

  async function sendConfirmation() {
    if (!isFormValid()) {
      return;
    }
    try {
      setIsLoading(true);
      const dataToSend = { login, token, password, confirmPassword };
      await SessionService.sendConfirmation(dataToSend);
      setIsLoading(false);
      swal('Deu tudo certo, prossiga!', '', 'success').then((x) =>
        history.replace('/'),
      );
    } catch (error) {
      setIsLoading(false);
      swal(
        `${
          error.response
            ? error.response.data.error
            : 'Houve um erro na sua requisição!'
        }`,
        'Tente novamente.',
        'error',
      );
    }
  }

  function isFormValid() {
    if (loginWithPhone && login.length < 6) {
      swal('Por favor, insira um telefone válido', '', 'error');
      return false;
    } else if (
      !login.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
    ) {
      swal('Por favor, insira um email válido', '', 'error');
      return false;
    }
    if (isInsertingToken) {
      if (token.length < 6) {
        swal('Por favor, insira um token válido', '', 'error');
        return false;
      }
      if (password.length < 8) {
        swal('A senha deve ter no mínimo 8 caracteres', '', 'error');
        return false;
      }
      if (password !== confirmPassword) {
        swal('A confirmação de senha está incorreta', '', 'error');
        return false;
      }
    }
  }

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
        {!isInsertingToken &&
          (loginWithPhone ? (
            <Column>
              <LoginInput
                placeholder='Seu email'
                name='login'
                id='login'
                required
                value={login}
                onChange={(e) => setlogin(e.target.value)}
              ></LoginInput>
            </Column>
          ) : (
            <Column>
              <PhoneInput phone={login} setPhone={setlogin}></PhoneInput>
            </Column>
          ))}
        {isInsertingToken && (
          <>
            <LoginInput
              placeholder='Sua senha'
              name='password'
              type='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></LoginInput>
            <LoginInput
              placeholder='Confirmação de senha'
              name='password'
              type='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></LoginInput>
            <InputMask
              mask='* * * * * *'
              value={token}
              onChange={(e) => setToken(e.target.value)}
            >
              {(inputProps) => (
                <LoginInput {...inputProps} placeholder='_ _ _ _ _ _' />
              )}
            </InputMask>
          </>
        )}
        <LoaderContainer color={'var(--color-pink)'} isLoading={isLoading}>
          <RegisterButton onClick={handleButtonClick}>
            {isInsertingToken ? 'Enviar token' : 'Continuar'}
          </RegisterButton>
        </LoaderContainer>
      </InitialForm>
    </Container>
  );
}
