import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '../../globalComponents';
import { UpdatePwdInput } from './styles';
import ButtonWithLoading from '../ButtonWithLoading';
import { updatePassword } from '../../services/userService';
import swal from 'sweetalert';

function GetContent() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();

  function isFormValid() {
    if (password.length < 6) {
      setErrorMessage('Sua senha precisa ter mais que 6 caracteres');
      return false;
    }
    if (password !== confirmPassword) {
      setErrorMessage('A confirmação de senha está incorreta');
      return false;
    }
    if (password !== confirmPassword) {
      setErrorMessage('A confirmação de senha está incorreta');
      return false;
    }
    if (password === oldPassword) {
      setErrorMessage('A senha antiga está igual à nova');
      return false;
    }
    return true;
  }

  async function handleFinish() {
    try {
      if (!isFormValid()) {
        return;
      }
      const dataToSend = { password, confirmPassword, oldPassword };
      await updatePassword(dataToSend);
      swal('Senha atualizada com sucesso', '', 'success');
    } catch (error) {
      swal(
        error.response
          ? error.response.data.error
          : 'Houve um erro na sua requisição',
        '',
        'error',
      );
    }
  }

  return (
    <>
      <Column style={{ height: '32em', justifyContent: 'space-around' }}>
        <UpdatePwdInput
          placeholder='Senha antiga'
          type='password'
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        ></UpdatePwdInput>
        <UpdatePwdInput
          placeholder='Nova senha'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></UpdatePwdInput>
        <UpdatePwdInput
          type='password'
          placeholder='Confirme nova Senha'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></UpdatePwdInput>
        <strong style={{ fontSize: '1.3em', color: 'var(--color-pink)' }}>
          {errorMessage}
        </strong>
        <ButtonWithLoading
          style={{
            backgroundColor: 'var(--color-purple-dark)',
            padding: '.7em',
            height: 'unset',
            boxShadow: '0px 10px 10px rgba(85, 57, 188, 0.5)',
          }}
          onClick={handleFinish}
          loaderColor={'var(--color-purple-dark)'}
        >
          Confirmar
        </ButtonWithLoading>
      </Column>
    </>
  );
}

export default function UpdatePassord() {
  const wrapper = document.createElement('div');
  ReactDOM.render(<GetContent></GetContent>, wrapper);
  return wrapper.firstChild;
}
