import React from 'react';
import Loading from 'react-loading';
import { InitialForm, Title } from '../FirstSignup/styles';

export default function Loader() {
  return (
    <InitialForm style={{ display: 'flex' }}>
      <Title style={{ margin: 'auto' }}>
        <strong style={{ fontSize: '1.5em' }}>Aguarde, por favor</strong>
      </Title>
      <div style={{ margin: 'auto', width: '40%', height: '40%' }}>
        <Loading
          width='100%'
          height='100%'
          color='var(--color-pink)'
          type='spinningBubbles'
        ></Loading>
      </div>
    </InitialForm>
  );
}
