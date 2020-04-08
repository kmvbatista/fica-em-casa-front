import React from 'react';
import { Column } from '../../globalComponents';
import {
  ProfilePhotoContainer,
  MainContainer,
  PhotoCard,
  Input,
  BottomContainer,
  Label,
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
        <Label style={{ color: 'var(--color-purple-dark)' }}>apelido</Label>
        <Input
          style={{
            fontSize: '3em',
            fontFamily: 'BalooThambi2-Bolder',
            marginTop: '.2em',
          }}
        ></Input>
        <BottomContainer>
          <div>
            <Label>seu nome</Label>

            <Input></Input>
          </div>
          <div>
            <Label>seu telefone</Label>
            <Input></Input>
          </div>
        </BottomContainer>
      </MainContainer>
    </Column>
  );
}
