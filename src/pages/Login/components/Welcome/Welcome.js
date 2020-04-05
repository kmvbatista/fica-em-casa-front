import React from 'react';
import './styles.js';
import { Title, Subtitle, Container } from './styles';

export default function Welcome() {
  return (
    <Container>
      <Title>Oi, tudo bem?</Title>
      <Subtitle>
        Sabemos que não muito, né :(<br></br>Mas esse app foi feito justamente
        para nos ajudarmos nesse momento tão complicado
      </Subtitle>
    </Container>
  );
}
