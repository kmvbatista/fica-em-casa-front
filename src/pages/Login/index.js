import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';

import api from '../../services/api';
import './style.css';
import InitialForm from './components/InitialForm/InitialForm';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useHistory();

  const handleSubmit = async () => {
    const dataToSend = { email, password };
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
    <Container style={{ padding: 0 }}>
      <Welcome></Welcome>
      <InitialForm
        email={email}
        setEmail={setEmail}
        password={setPassword}
        handleSubmit={handleSubmit}
      ></InitialForm>
    </Container>
  );
}
