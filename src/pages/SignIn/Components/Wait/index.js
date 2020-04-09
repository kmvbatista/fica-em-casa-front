import React from 'react';
import './styles.js';
import { Title, TopDecoration, Container } from './styles';
import { Row } from '../../../../globalComponents.js';

export default function Wait() {
  return (
    <Container
      style={{
        position: 'relative',
        height: '20vh',
        backgroundColor: 'var(--color-purple)',
      }}
    >
      <img
        src='./people-at-the-window.png'
        alt='people'
        style={{
          position: 'absolute',
          right: '0%',
          height: '50%',
          right: '0',
        }}
      />
      <img
        src='./person-at-the-window.png'
        alt='person'
        style={{
          position: 'absolute',
          height: '70%',
          left: '0',
          top: '0',
        }}
      />
      <Title>
        <strong style={{ fontSize: 'inherit', marginLeft: '1em' }}>
          Quase lá!
        </strong>
      </Title>
    </Container>
  );
}
