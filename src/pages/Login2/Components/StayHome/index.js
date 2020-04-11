import React from 'react';
import './styles.js';
import { Title, TopDecoration, Container } from './styles';

export default function StayHome() {
  return (
    <Container>
      <TopDecoration>
        <img
          src='./logo.png'
          alt='logo'
          style={{
            position: 'absolute',
            top: '3em',
            height: '45%',
            left: '50%',
            transform: 'translate(-50%, 0)',
          }}
        />
      </TopDecoration>
      <Title>
          <strong style={{ fontSize: 'inherit' }}>Fica</strong>
          {' '}
          em 
          {' '}
          <strong style={{ fontSize: 'inherit' }}>casa</strong>
      </Title>
    </Container>
  );
}