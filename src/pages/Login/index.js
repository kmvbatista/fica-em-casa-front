import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import StayHome from './Components/StayHome';
import api from '../../services/api';
import { setCookies } from '../../services/sessionService';

import ThirdForm from './Components/ThirdForm/ThirdForm';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = async () => {
    const dataToSend = { phone, password };
    try {
      const response = await api.post('/sessions', dataToSend);
      setCookies(response.data);
      history.replace('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: 0 }}>
      <StayHome></StayHome>
      <ThirdForm
        phone={phone}
        setPhone={setPhone}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      ></ThirdForm>
    </div>
  );
}
