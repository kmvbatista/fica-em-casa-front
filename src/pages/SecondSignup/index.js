import React, { useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import {
  Welcome,
  LoginInput,
  Title,
  InitialForm,
  Container,
} from '../FirstSignup/styles';
import swal from 'sweetalert';
import PhoneInput from '../../components/PhoneInput';
import ButtonWithLoading from '../../components/ButtonWithLoading';
import * as SessionService from '../../services/sessionService';
import Store from '../../services/DefaultContext';
import { useForm } from '../../customHooks/useForm';

export default function SignIn() {
  const params = useParams();
  const { token, loginType } = params;
  const showPhone = loginType !== 'phone';
  const history = useHistory();
  const [phone, setPhone] = useState();

  const storeHandler = useContext(Store);

  const [inputValues, handleInputChanges] = useForm({
    name: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async () => {
    if (!isFormValid()) return;
    const dataToSend = {
      name: inputValues.name,
      useTermsRead: true,
      password: inputValues.password,
      token,
      confirmPassword: inputValues.confirmPassword,
      phone,
    };
    try {
      const response = await SessionService.registerUser(dataToSend);
      storeHandler.isUserLogged = true;
      storeHandler.user = response.data.user;
      storeHandler.setUser(response.data.user);
      swal(
        'Bem vindo ao fica em casa',
        'Estamos felizes com sua chegada!',
        'success',
      );
      history.push('/', { userJustRegistered: true });
    } catch (error) {
      swal(
        `${
          error.response
            ? error.response.data.error
            : 'Tente novamente mais tarde!'
        }`,
        'Houve um erro na requisição',
        'error',
      );
    }
  };

  function isFormValid() {
    if (!inputValues.name || inputValues.name === '') {
      swal('Insira um nome por favor', '', 'error');
      return false;
    }
    if (showPhone && (!phone || phone.length < 5)) {
      swal('Telefone está em formato inválido', 'Corrija por favor', 'error');
      return false;
    }
    if (inputValues.password !== inputValues.confirmPassword) {
      swal('As duas senhas não estão iguais', 'Corrija por favor', 'error');
      return false;
    }
    if (inputValues.password.length < 8) {
      swal(
        'Insira uma senha de 8 dígitos, por favor',
        'Corrija por favor',
        'error',
      );
      return false;
    }
    return true;
  }

  return (
    <Container>
      <Welcome
        style={{
          position: 'relative',
          zIndex: '-1',
        }}
      >
        <img
          style={{
            width: '20%',
            height: '20%',
            position: 'absolute',
            right: '0',
            top: '0',
          }}
          src='../../tijolo.png'
        ></img>
        <img
          src='../../people-at-the-window.png'
          alt='people'
          style={{
            position: 'absolute',
            right: '0%',
            height: '50%',
          }}
        />
        <img
          src='../../person-at-the-window.png'
          alt='person'
          style={{
            position: 'absolute',
            height: '50%',
            left: '0',
            top: '3em',
            zIndex: '-1',
            filter: 'opacity(0.5)',
          }}
        />
        <Title>
          <strong
            style={{
              fontSize: '2em',
              marginLeft: '1em',
              color: 'white',
            }}
          >
            Quase lá!
          </strong>
        </Title>
      </Welcome>
      <InitialForm>
        <LoginInput
          placeholder='seu nome'
          type='text'
          name='name'
          required
          value={inputValues.name}
          onChange={handleInputChanges}
          onKeyPress={(e) => e.charCode === 13 && handleSubmit()}
        ></LoginInput>
        {showPhone && (
          <PhoneInput value={phone} setPhone={setPhone}></PhoneInput>
        )}
        <LoginInput
          placeholder='criar senha'
          type='password'
          name='password'
          required
          value={inputValues.password}
          onChange={handleInputChanges}
          onKeyPress={(e) => e.charCode === 13 && handleSubmit()}
        ></LoginInput>
        <LoginInput
          placeholder='confirmar senha'
          type='password'
          value={inputValues.confirmPassword}
          onChange={handleInputChanges}
          name='confirmPassword'
          required
          onKeyPress={(e) => e.charCode === 13 && handleSubmit()}
        ></LoginInput>
        <ButtonWithLoading
          loaderColor={'var(--color-pink)'}
          onClick={handleSubmit}
        >
          Cadastrar-se
        </ButtonWithLoading>
      </InitialForm>
    </Container>
  );
}
