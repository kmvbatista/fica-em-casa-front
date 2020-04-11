import React from 'react';
import {
  ColumnContainer,
  Grid,
  OptionCard,
  GetModalButton,
} from '../../globalComponents';
import { SubTitle, Title } from './styles';
import cardData from '../../assets/productCategory.json';

export default function NeedHelpOptions() {
  return (
    <ColumnContainer style={{ backgroundColor: 'var(--color-purple)' }}>
      <Title>Quero ajudar</Title>
      <SubTitle>
        Pode escolher mais de uma opção, tá?
        <br />É muito importante que você descreva como pode ajudar após a
        seleção da categoria, assim fica mais fácil de ajudar!
      </SubTitle>
      <Grid>
        {cardData.map((el) => (
          <OptionCard
            key={el.category}
            style={{ color: 'var(--color-purple)' }}
          >
            <img
              src={el.imageUrl}
              alt={el.category}
              style={{ maxHeight: '55%' }}
            />
            {el.category}
          </OptionCard>
        ))}
      </Grid>
      <GetModalButton style={{ color: 'var(--color-purple)' }}>
        <img src='./logo.png' alt='logo' style={{ height: '100%' }} />
        <div>
          Pode ajudar com algo mais?
          <br />
          <p style={{ marginTop: '5px', fontWeight: 'bold' }}>Digite aqui!</p>
        </div>
      </GetModalButton>
    </ColumnContainer>
  );
}
