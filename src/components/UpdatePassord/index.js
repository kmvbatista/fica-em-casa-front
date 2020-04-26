import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '../../globalComponents';
import { UpdatePwdInput } from './styles';
import ButtonWithLoading from '../ButtonWithLoading';
import { updatePassword } from '../../services/userService';
import swal from 'sweetalert';

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

function GetContent() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  return (
    <>
      <Column style={{ height: '32em', justifyContent: 'space-around' }}>
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
          style={{
            backgroundColor: 'var(--color-purple-dark)',
            padding: '.7em',
            height: 'unset',
          }}
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
  ReactDOM.render(<GetContent></GetContent>, wrapper);
  return wrapper.firstChild;
}
