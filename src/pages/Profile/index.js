import React from 'react';
import { Column } from '../../globalComponents';
import {
  ProfilePhotoContainer,
  MainContainer,
  PhotoCard,
  Input,
  BottomContainer,
  Label,
  InputBlock,
} from './styles';

export default function index() {
  return (
    <Column>
      <ProfilePhotoContainer>
        <Column style={{ alignItems: 'center' }}>
          <PhotoCard></PhotoCard>
          <strong style={{ fontSize: '2em' }}>Adicionar foto</strong>
        </Column>
      </ProfilePhotoContainer>
      <MainContainer>
        <InputBlock>
          <Label style={{ color: 'var(--color-purple-dark)' }}>apelido</Label>
          <Input
            style={{
              fontSize: '3em',
              fontFamily: 'BalooThambi2-Bolder',
              marginTop: '.2em',
              lineHeight: '1.8',
            }}
          ></Input>
        </InputBlock>
        <InputBlock>
          <Label>seu nome</Label>

          <Input></Input>
        </InputBlock>
        <InputBlock>
          <Label>seu telefone</Label>
          <Input></Input>
        </InputBlock>
        <BottomContainer></BottomContainer>
      </MainContainer>
    </Column>
  );
}
