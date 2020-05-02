import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  sendForgotPwdToken,
  validateForgotPwdToken,
} from '../../services/tokenService';
import { resetPassword } from '../../services/userService';
import { Column, Row } from '../../globalComponents';

import swal from 'sweetalert';
import {
  Welcome,
  InitialForm,
  LoginInput,
  RegisterButton,
  Title,
  Container,
  TextLink,
} from '../FirstSignup/styles';
import LoaderContainer from '../../components/LoaderContainer';
import PhoneInput from '../../components/PhoneInput';
import { isEmailValid } from '../../services/emailValidator';
import Loader from './Loader';
import { useForm } from '../../customHooks/useForm';

export default function ForgotPassword() {
  const params = useParams();
  const [login, setlogin] = useState('');
  const [isLoading, setIsLoading] = useState(params.token != undefined);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [loginWithPhone, setLoginWithPhone] = useState(false);
  const [alreadySentCode, setAlreadySentCode] = useState(false);
  const history = useHistory();

  useEffect(() => {
    validateToken();
  }, []);

  async function validateToken() {
    try {
      if (params.token) {
        await validateForgotPwdToken(params.token);
        setIsChangingPassword(true);
        setIsLoading(false);
      }
    } catch (error) {
      await swal(
        error.response
          ? error.response.data.error
          : 'Erro ao validar o seu token',
        'Por favor, envie novamente a confirmação na tela seguinte.',
        'error',
      );
      setIsLoading(false);
      history.replace('/forgot-password');
    }
  }

  async function sendToken() {
    if (!isFormValid()) {
      return;
    }
    try {
      setIsLoading(true);
      await sendForgotPwdToken(login);
      setIsLoading(false);
      setAlreadySentCode(true);
      swal(
        'Código enviado com sucesso',
        'Verifique o seu email por favor',
        'success',
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

  async function sendNewPassword() {
    if (!isFormValid()) {
      return;
    }
    try {
      setIsLoading(true);
      const dataToSend = {
        password: inputValues.password,
        confirmPassword: inputValues.confirmPassword,
        token: params.token,
      };
      await resetPassword(dataToSend);
      swal({
        title: 'Senha alterada com sucesso. \nFaça login por favor',
        icon: 'success',
      }).then((x) => history.replace('/login'));
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
  function toggleLoginWithPhone() {
    setlogin('');
    setLoginWithPhone(!loginWithPhone);
  }

  function handleSubmit() {
    if (isChangingPassword) {
      return sendNewPassword();
    }
    return sendToken();
  }

  function isFormValid() {
    if (isChangingPassword) {
      if (inputValues.password.length < 8) {
        swal('A senha deve ter no mínimo 8 caracteres', '', 'error');
        return false;
      }
      if (inputValues.password !== inputValues.confirmPassword) {
        swal('A confirmação de senha está incorreta', '', 'error');
        return false;
      }
    } else {
      if (loginWithPhone) {
        debugger;
        if (login.length < 6) {
          swal('Por favor, insira um telefone válido', '', 'error');
          return false;
        }
      } else if (!isEmailValid(login)) {
        swal('Por favor, insira um email válido', '', 'error');
        return false;
      }
    }

    return true;
  }

  const [inputValues, handleInputChanges] = useForm({
    password: '',
    confirmPassword: '',
  });

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
          src={params.token ? '../ficaemcasa.svg' : './ficaemcasa.svg'}
          alt='Fica em Casa'
        />
        <div style={{ fontSize: '5em' }}>
          <strong>Fica</strong> em <strong>casa</strong>
        </div>
      </Welcome>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <InitialForm style={{ justifyContent: 'space-evenly' }}>
          <Title>
            <strong style={{ fontSize: '1.5em' }}>Esqueci minha senha</strong>
          </Title>
          <Column>
            {alreadySentCode && (
              <Title>
                <p style={{ fontSize: '1em' }}>
                  O acesso para resetar a senha foi enviado para
                </p>
              </Title>
            )}
            {!isChangingPassword &&
              (!loginWithPhone ? (
                <Column>
                  <LoginInput
                    placeholder='seu email'
                    name='login'
                    id='login'
                    required
                    value={login}
                    onChange={(e) => setlogin(e.target.value)}
                    onKeyPress={(e) => e.charCode === 13 && handleSubmit()}
                  ></LoginInput>
                  <Row
                    style={{ width: '100%', justifyContent: 'space-around' }}
                  >
                    <TextLink onClick={toggleLoginWithPhone}>
                      faço login com telefone
                    </TextLink>
                  </Row>
                </Column>
              ) : (
                <Column>
                  <PhoneInput
                    phone={login}
                    setPhone={setlogin}
                    onEnter={handleSubmit}
                  ></PhoneInput>
                  <TextLink onClick={toggleLoginWithPhone}>
                    faço login com email
                  </TextLink>
                </Column>
              ))}
          </Column>
          {isChangingPassword && (
            <>
              <LoginInput
                placeholder='nova senha'
                name='password'
                type='password'
                required
                value={inputValues.password}
                onChange={handleInputChanges}
                onKeyPress={(e) => e.charCode === 13 && handleSubmit()}
              ></LoginInput>
              <LoginInput
                placeholder='confirmação de nova senha'
                name='confirmPassword'
                type='password'
                required
                value={inputValues.confirmPassword}
                onChange={handleInputChanges}
                onKeyPress={(e) => e.charCode === 13 && handleSubmit()}
              ></LoginInput>
            </>
          )}
          <LoaderContainer color={'var(--color-pink)'} isLoading={isLoading}>
            <RegisterButton onClick={handleSubmit}>
              {isChangingPassword
                ? 'Alterar senha'
                : alreadySentCode
                ? 'Reenviar'
                : 'Enviar'}
            </RegisterButton>
          </LoaderContainer>
        </InitialForm>
      )}
    </Container>
  );
}
