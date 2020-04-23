import React, { useEffect, useState } from 'react';
import { 
  Title,
  Container, 
  EffectReticences,
  Column,
  FilledCircle,
  OutlinedCirclePurple,
  OutlinedCirclePink,
  ElementX,
  PingContainer,
  MainPing,
  OuterPing,
  OuterPingMd,
  OuterPingXl
  } from './styles';

export default function LoadingMatch() {
  return (
    <Container>
      <Title>Buscando<br/>quem precisa <br/>de ajuda<EffectReticences>...</EffectReticences></Title>
      <Column style={{ alignItems: 'center' }}>

        <FilledCircle></FilledCircle>
        <OutlinedCirclePurple></OutlinedCirclePurple>
        <OutlinedCirclePink></OutlinedCirclePink>
        <ElementX>
          <img src='./x-graphic-element.png' alt='logo' style={{ width: '20px' }} />
        </ElementX>

        <PingContainer>
        <MainPing>
          <img src='./logo.png' alt='logo' style={{ height: '100%' }} />
        </MainPing>
        <OuterPing></OuterPing>
        <OuterPingMd></OuterPingMd>
        <OuterPingXl></OuterPingXl>
        </PingContainer>
      </Column>
    </Container>
  );
}
