import React from 'react';
import Dropdown from './PopUpMenu';
import { useHistory } from 'react-router-dom';

export default function Menu() {
  const history = useHistory();
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <img
        src='./back.svg'
        onClick={() => history.goBack()}
        style={{ width: '5em', padding: '1em', cursor: 'pointer' }}
        alt='Voltar'
      />
      <Dropdown></Dropdown>
    </div>
  );
}
