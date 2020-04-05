import React from 'react';
import {
  Container,
  Box1,
  Box2,
  CenteredBox,
  TitleContainer,
  SubTitle,
  Title,
  HighlightText,
  SecondaryText,
} from './styles';

export default function ChooseGroup() {
  return (
    <Container>
      <Box1>
        <TitleContainer>
          <Title>
            Faço parte do<br></br>
          </Title>
          <SubTitle>grupo de risco</SubTitle>
        </TitleContainer>
        <CenteredBox>
          <div style={{ direction: 'rtl' }}>
            <HighlightText>
              Preciso<br></br>
            </HighlightText>
            <SecondaryText>de ajuda</SecondaryText>
          </div>
        </CenteredBox>
      </Box1>
      <Box2>
        <TitleContainer>
          <Title>
            Não faço parte<br></br>
          </Title>
          <SubTitle>do grupo de risco</SubTitle>
        </TitleContainer>
        <CenteredBox>
          <div style={{ direction: 'rtl' }}>
            <HighlightText>
              Quero<br></br>
            </HighlightText>
            <SecondaryText>ajudar</SecondaryText>
          </div>
        </CenteredBox>
      </Box2>
    </Container>
  );
}
