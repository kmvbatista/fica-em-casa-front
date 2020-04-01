import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [adress, setAdress] = useState('');
  const [age, setAge] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [childrensNumber, setChildrensNumber] = useState(0);

  const handleSubmit = () => {};

  return (
    <Container>
      <form>
        <div className='input-group'>
          <div className='input-block'>
            <label htmlFor='name'>Nome</label>
            <input
              name='name'
              id='name'
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className='input-block'>
            <label htmlFor='name'>Email</label>
            <input
              name='email'
              id='email'
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className='input-group'>
          <div className='input-block'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
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
              onChange={e => setAdress(e.target.value)}
            />
          </div>
        </div>

        <div className='input-group'>
          <div className='input-block'>
            <label htmlFor='cellphone'>Celular</label>
            <input
              type='text'
              name='cellphone'
              id='cellphone'
              required
              value={cellphone}
              onChange={e => setCellphone(e.target.value)}
            />
          </div>

          <div className='input-block'>
            <label htmlFor='age'>Idade</label>
            <input
              type='text'
              name='age'
              id='age'
              required
              value={age}
              onChange={e => setAge(e.target.value)}
            />
          </div>
        </div>

        <div className='input-group'>
          <div className='input-block'>
            <label htmlFor='childrensNumber'>Nº de filhos</label>
            <input
              type='text'
              name='childrensNumber'
              id='childrensNumber'
              required
              value={childrensNumber}
              onChange={e => setChildrensNumber(e.target.value)}
            />
          </div>
        </div>

        <button>
          <Link to='/home' style={{ color: 'white' }}>
            Salvar
          </Link>
        </button>
      </form>
      <button>
        <Link to='/home' style={{ color: 'white' }}>
          Salvar
        </Link>
      </button>
    </Container>
  );
}
