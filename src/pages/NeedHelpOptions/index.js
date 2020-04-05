import React from 'react';
import { PinkContainer } from '../../globalComponents';
import { Title } from './styles';
import { SubTitle, OptionCard } from './styles';

export default function NeedHelpOptions() {
  return (
    <PinkContainer>
      <Title>Preciso de ajuda</Title>
      <SubTitle>
        Pode escolher mais de uma opção, tá?
        <br />É muito importante que você descreva a sua necessidade após a
        seleção da categoria, assim fica mais fácil de ajudar!
      </SubTitle>
      <div></div>
    </PinkContainer>
  );
}
