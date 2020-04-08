import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Wait from './Components/Wait';
import api from '../../services/api';

import SecondForm from './Components/SecondForm/SecondForm';

export default function SignIn() {
  const [telefone, setTelefone] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = async () => {
    const dataToSend = { telefone, password };
    try {
      const response = await api.post('/sessions', dataToSend);
      console.log(response);
      const { user, token } = response.data;
      document.cookie = `token: ${JSON.stringify(
        token,
      )}; user: ${JSON.stringify(user)};`;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: 0 }}>
      <Wait></Wait>
      <SecondForm
        telefone={telefone}
        setTelefone={setTelefone}
        password={setPassword}
        handleSubmit={() => history.push('/choose-group')}
      ></SecondForm>
    </div>
  );
}
