import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Welcome,
  LoginInput,
  RegisterButton,
  Title,
  InitialForm,
  Container,
} from '../FirstSignup/styles';
import InputMask from 'react-input-mask';
import swal from 'sweetalert';
import PhoneInput from '../../components/PhoneInput';

export default function SignIn() {
  const history = useHistory();
  const dataComing = history.location.state;
  const [phone, setPhone] = useState(dataComing.phone);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async () => {
    if (!isFormValid()) return;
    const dataToNextPage = {
      name: dataComing.name,
      login: dataComing.login,
      useTermsRead: dataComing.useTermsRead,
      phone,
      password,
      confirmPassword,
    };
    history.replace('/', dataToNextPage);
  };

  function isFormValid() {
    if (!phone || phone.length < 5) {
      swal('Telefone está em formato inválido', 'Corrija por favor', 'error');
      return false;
    }
    if (password != confirmPassword) {
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
          src='./people-at-the-window.png'
          alt='people'
          style={{
            position: 'absolute',
            right: '0%',
            height: '57%',
          }}
        />
        <img
          src='./person-at-the-window.png'
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
        {!dataComing.phone && (
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
        <RegisterButton onClick={() => handleSubmit()}>
          Cadastrar
        </RegisterButton>
      </InitialForm>
    </Container>
  );
}
