import React, { useState } from 'react';
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
import InputMask from 'react-input-mask';

export default function Profile({ children }) {
  const [phone, setPhone] = useState();
  return (
    <Column style={{ position: 'relative' }}>
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
          <InputMask
            mask='(99) 99999-9999'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          >
            {(inputProps) => (
              <Input
                {...inputProps}
                placeholder='(00) 00000-0000'
                type='tel'
                disableUnderline
              />
            )}
          </InputMask>
        </InputBlock>
        <BottomContainer></BottomContainer>
      </MainContainer>
      {children}
    </Column>
  );
}
