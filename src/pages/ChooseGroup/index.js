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
  Image,
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
          <Image
            style={{ left: 0 }}
            src='./preciso-ajuda.png'
            alt='preciso-de-ajuda'
          ></Image>
          <div
            style={{
              direction: 'rtl',
              position: 'absolute',
              right: '20%',
              color: 'var(--color-pink)',
            }}
          >
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
          <div
            style={{
              direction: 'rtl',
              color: 'var(--color-purple)',
            }}
          >
            <Image
              style={{ right: 0, height: '105%', top: '10%' }}
              src='./quero-ajudar.png'
              alt='quero-ajudar'
            ></Image>

            <div style={{ position: 'absolute', left: '12%', top: '35%' }}>
              <HighlightText>
                Quero<br></br>
              </HighlightText>
              <SecondaryText>ajudar</SecondaryText>
            </div>
          </div>
        </CenteredBox>
      </Box2>
    </Container>
  );
}
