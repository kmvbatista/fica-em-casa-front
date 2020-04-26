import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '../../globalComponents';
import { UpdatePwdInput } from './styles';
import ButtonWithLoading from '../ButtonWithLoading';
import { updatePassword } from '../../services/userService';
import swal from 'sweetalert';

const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [oldPassword, setOldPassword] = useState('');
const [errorMessage, setErrorMessage] = useState();

async function handleFinish() {
  try {
    await updatePassword();
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

function getContent() {
  return (
    <>
      <Column>
        <UpdatePwdInput
          placeholder='Senha antiga'
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        ></UpdatePwdInput>
        <UpdatePwdInput
          placeholder='Nova senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></UpdatePwdInput>
        <UpdatePwdInput
          placeholder='Confirme nova Senha'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></UpdatePwdInput>
        <ButtonWithLoading
          style={{ backgroundColor: 'var(--color-purple-dark)' }}
          onClick={handleFinish}
        >
          Confirmar
        </ButtonWithLoading>
      </Column>
    </>
  );
}

export default function UpdatePassord() {
  const wrapper = document.createElement('div');
  ReactDOM.render(getContent(), wrapper);
  return wrapper.firstChild;
}
