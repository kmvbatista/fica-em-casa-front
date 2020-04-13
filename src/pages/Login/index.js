import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import StayHome from './Components/StayHome';
import api from '../../services/api';
import { setCookies } from '../../services/sessionService';

import ThirdForm from './Components/ThirdForm/ThirdForm';
import swal from 'sweetalert';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async () => {
    const dataToSend = { phone, password };
    try {
      setIsLoading(true);
      const response = await api.post('/sessions', dataToSend);
      setCookies(response.data);
      history.replace('/');
    } catch (error) {
      setIsLoading(false);
      swal('Senha ou email inválidos!', 'Tente novamente.', 'error');
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
        isLoading={isLoading}
      ></ThirdForm>
    </div>
  );
}
