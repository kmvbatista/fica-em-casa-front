import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './style.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {};

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className='input-block'>
          <label htmlFor='password'>Email</label>
          <input
            name='email'
            id='email'
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='input-block'>
          <label htmlFor='name'>Senha</label>
          <input
            name='password'
            id='password'
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button>Login</button>
        <button>
          <Link to='signup' style={{ color: 'white' }}>
            Cadastrar-se
          </Link>
        </button>
      </form>
    </Container>
  );
}
