import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import StayHome from './Components/StayHome';
import api from '../../services/api';

import ThirdForm from './Components/ThirdForm/ThirdForm';

export default function Login() {
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
      <StayHome></StayHome>
      <ThirdForm
        telefone={telefone}
        setTelefone={setTelefone}
        password={setPassword}
        handleSubmit={() => history.push('/choose-group')}
      ></ThirdForm>
    </div>
  );
}
