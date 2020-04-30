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

export default function SignIn() {
  const params = useParams();
  const { token, loginType } = params;
  const showPhone = loginType !== 'phone';
  const history = useHistory();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const storeHandler = useContext(Store);

  const handleSubmit = async () => {
    if (!isFormValid()) return;
    const dataToSend = {
      name,
      useTermsRead: true,
      phone,
      password,
      token,
      confirmPassword,
    };
    try {
      debugger;
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
    if (!name || name === '') {
      swal('Insira um nome por favor', '', 'error');
      return false;
    }
    if (showPhone && (!phone || phone.length < 5)) {
      swal('Telefone está em formato inválido', 'Corrija por favor', 'error');
      return false;
    }
    if (password !== confirmPassword) {
      swal('As duas senhas não estão iguais', 'Corrija por favor', 'error');
      return false;
    }
    if (password.length < 8) {
      swal(
        'Insira uma senha de 8 dígitos, por favor',
        'Corrija por favor',
        'error',
      );
      setPassword('');
      setConfirmPassword('');
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
          src='../../people-at-the-window.png'
          alt='people'
          style={{
            position: 'absolute',
            right: '0%',
            height: '57%',
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></LoginInput>
        {showPhone && (
          <PhoneInput value={phone} setPhone={setPhone}></PhoneInput>
        )}
        <LoginInput
          placeholder='criar senha'
          type='password'
          name='password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></LoginInput>
        <LoginInput
          placeholder='confirmar senha'
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          name='confirmPassword'
          required
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
