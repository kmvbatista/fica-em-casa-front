import React from 'react';
import './styles.js';
import { Title, TopDecoration, Container } from './styles';

export default function Wait() {
  return (
    <Container>
      <TopDecoration>
        <img
          src='./people-at-the-window.png'
          alt='people'
          style={{
            position: 'absolute',
            top: '-2em',
            right: '0%',
            height: '180%',
            left: '90%',
            transform: 'translate(-50%, 0)',
          }}
        />
        <img
          src='./person-at-the-window.png'
          alt='person'
          style={{
            position: 'absolute',
            top: '-2em',
            height: '120%',
            left: '-2%',
            transform: 'translate(-50%, 0)',
          }}
        />
      </TopDecoration>
      <Title>
        <strong style={{ fontSize: 'inherit', marginBottom: '50em',}}>Quase lá!</strong>
      </Title>
    </Container>
  );
}