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
    <ColumnContainer>
      <Title>Preciso de ajuda</Title>
      <SubTitle>
        Pode escolher mais de uma opção, tá?
        <br />É muito importante que você descreva a sua necessidade após a
        seleção da categoria, assim fica mais fácil de ajudar!
      </SubTitle>
      <Grid>
        {cardData.map((el) => (
          <OptionCard key={el.name}>
            <img src={el.imageUrl} alt={el.name} style={{ maxHeight: '55%' }} />
            {el.name}
          </OptionCard>
        ))}
      </Grid>
      <GetModalButton>
        <img src='./logo.png' alt='logo' style={{ height: '100%' }} />
        <div>
          Não achou sua necessidade acima?
          <br />
          <p style={{ marginTop: '5px', fontWeight: 'bold' }}>
            Digite ela aqui!
          </p>
        </div>
      </GetModalButton>
    </ColumnContainer>
  );
}
