import React from 'react';
import {
  Title,
  EffectReticences,
  Container,
  Column,
  FilledCircle,
  OutlinedCirclePurple,
  OutlinedCirclePink,
  ElementX,
  PingContainer,
  MainPing,
  OuterPing,
  OuterPingMd,
  OuterPingXl,
} from './styles';

export default function LoadingMatch() {
  return (
    <Container>
      <Title style={{ height: '20em' }}>
        Buscando
        <br />
        pessoas próximas<EffectReticences>...</EffectReticences>
      </Title>
      <Column style={{ alignItems: 'center' }}>
        <FilledCircle></FilledCircle>
        <OutlinedCirclePurple></OutlinedCirclePurple>
        <OutlinedCirclePink></OutlinedCirclePink>
        <ElementX>
          <img
            src='./x-graphic-element.png'
            alt='logo'
            style={{ width: '20px' }}
          />
        </ElementX>

        <PingContainer>
          <MainPing>
            <img src='./ficaemcasa.svg' alt='logo' style={{ height: '100%' }} />
          </MainPing>
          <OuterPing></OuterPing>
          <OuterPingMd></OuterPingMd>
          <OuterPingXl></OuterPingXl>
        </PingContainer>
      </Column>
    </Container>
  );
}
