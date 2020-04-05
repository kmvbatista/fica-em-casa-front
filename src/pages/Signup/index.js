import React, { useState } from 'react';
import { Container, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import './style.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [adress, setAdress] = useState('');
  const [birthday, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [childrensNumber, setChildrensNumber] = useState(0);

  const history = useHistory();

  const handleSubmit = async () => {
    const dataToSend = {
      email,
      name,
      password,
      confirmPassword,
      adress,
      birthday,
      phone,
      childrensNumber,
    };
    try {
      await api.post('/user', dataToSend);
      history.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className='container'>
      <form>
        <div className='input-group'>
          <div className='input-block'>
            <label htmlFor='name'>Nome</label>
            <input
              name='name'
              id='name'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='input-block'>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              id='email'
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className='input-group'>
          <div className='input-block'>
            <label htmlFor='password'>Senha</label>
            <input
              type='password'
              name='password'
              id='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='input-block'>
            <label htmlFor='confirmPassword'>Confirme a Senha</label>
            <input
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <div className='input-group'>
          <div className='input-block'>
            <label htmlFor='phone'>Celular</label>
            <input
              type='text'
              name='phone'
              id='phone'
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className='input-block'>
            <label htmlFor='birthday'>Idade</label>
            <input
              type='date'
              name='birthday'
              id='birthday'
              required
              value={birthday}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>

        <div className='input-group'>
          <div className='input-block'>
            <label htmlFor='childrensNumber'>Nº de filhos</label>
            <input
              type='number'
              name='childrensNumber'
              id='childrensNumber'
              required
              value={childrensNumber}
              onChange={(e) => setChildrensNumber(e.target.value)}
            />
          </div>
          <div className='input-block'>
            <label htmlFor='adress'>Endereço</label>
            <input
              type='text'
              name='adress'
              id='adress'
              required
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            />
          </div>
        </div>
        <Button
          variant='contained'
          className='save-button'
          color='primary'
          onClick={handleSubmit}
        >
          Salvar
        </Button>
      </form>
    </Container>
  );
}
