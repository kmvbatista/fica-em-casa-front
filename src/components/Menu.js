import React from 'react';
import Dropdown from './PopUpMenu';
import { useHistory } from 'react-router-dom';
import { Row } from '../globalComponents';

export default function Menu({ customStyle }) {
  const history = useHistory();
  return (
    <div
      style={
        customStyle
          ? customStyle
          : {
              position: 'absolute',
              top: '0',
              width: '100%',
              height: 'min-content',
            }
      }
    >
      <Row style={{ width: '100%', padding: '0 2em' }}>
        <img
          src='./back.svg'
          onClick={() => history.goBack()}
          style={{ width: '5em', padding: '1em', cursor: 'pointer' }}
          alt='Voltar'
        />
        <div style={{ width: '100%' }}></div>
        <Dropdown></Dropdown>
      </Row>
    </div>
  );
}
