import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { loginUser } from '../../services/sessionService';
import { Row, Column } from '../../globalComponents';
import PhoneInput from '../../components/PhoneInput';
import Store from '../../services/DefaultContext';
import { isEmailValid } from '../../services/emailValidator';

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
import { useForm } from '../../customHooks/useForm';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [logWithPhone, setLogWithPhone] = useState(false);

  const storeHandler = useContext(Store);

  const history = useHistory();

  const handleSubmit = async () => {
    if (!isFormValid()) {
      return;
    }
    const dataToSend = {
      login: inputValues.login,
      password: inputValues.password,
    };
    try {
      setIsLoading(true);
      const response = await loginUser(dataToSend);
      storeHandler.setUser(response.user);
      history.replace('/');
    } catch (error) {
      setIsLoading(false);
      swal(
        `${
          error.response
            ? error.response.data.error
            : 'Houve um erro ao fazer o login!'
        }`,
        'Tente novamente.',
        'error',
      ).catch((x) => {
        swal(
          `${'Houve um erro ao fazer o login'}`,
          'Tente novamente.',
          'error',
        );
      });
    }
  };

  function isFormValid() {
    if (logWithPhone) {
      if (inputValues.login.length < 5) {
        swal('Por favor, insira um telefone válido', '', 'error');
        return false;
      }
    } else if (!isEmailValid(inputValues.login)) {
      swal('Por favor, insira um email válido', '', 'error');
      return false;
    }
    if (inputValues.password.length < 8) {
      swal('A senha deve ter no mínimo 8 caracteres', '', 'error');
      return false;
    }
    return true;
  }

  function changeLoginWay() {
    setLogWithPhone(!logWithPhone);
    inputValues.login = '';
  }

  const [inputValues, handleInputChange] = useForm({
    login: '',
    password: '',
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
          src='./ficaemcasa.svg'
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
        {logWithPhone ? (
          <Column>
            <PhoneInput
              setPhone={(value) => (inputValues.login = value)}
              onEnter={handleSubmit}
            ></PhoneInput>
          </Column>
        ) : (
          <Column>
            <LoginInput
              placeholder='seu email'
              name='login'
              required
              value={inputValues.login}
              onChange={handleInputChange}
              onEnter={handleSubmit}
            ></LoginInput>
            <TextLink style={{ marginTop: '1em' }} onClick={changeLoginWay}>
              faço login com telefone
            </TextLink>
          </Column>
        )}
        <Column>
          <LoginInput
            placeholder='sua senha'
            name='password'
            type='password'
            value={inputValues.password}
            required
            onChange={handleInputChange}
            onKeyPress={(e) => e.charCode === 13 && handleSubmit()}
          ></LoginInput>
        </Column>
        <LoaderContainer
          containerStyle={{ marginBottom: '2em' }}
          color={'var(--color-pink)'}
          isLoading={isLoading}
        >
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
