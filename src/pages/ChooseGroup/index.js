import React from 'react';
import { Container, Box1, Box2, CenteredBox, SubTitle, Title } from './styles';

export default function ChooseGroup() {
  return (
    <Container>
      <Box1>
        <div>
          <Title></Title>
          <SubTitle></SubTitle>
        </div>
        <CenteredBox></CenteredBox>
      </Box1>
      <Box2>
        <CenteredBox></CenteredBox>
      </Box2>
    </Container>
  );
}
