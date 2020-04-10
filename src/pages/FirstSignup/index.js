import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';

import api from '../../services/api';
import InitialForm from './components/InitialForm/InitialForm';
export default function Login() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const history = useHistory();

  const handleSubmit = async () => {
    history.push('second-signup', { name, phone });
  };

  return (
    <div style={{ padding: 0 }}>
      <Welcome></Welcome>
      <InitialForm
        phone={phone}
        setPhone={setPhone}
        name={name}
        setName={setName}
        handleSubmit={handleSubmit}
      ></InitialForm>
    </div>
  );
}
