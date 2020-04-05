import React from 'react';
import { PinkContainer } from '../../globalComponents';
import { SubTitle, OptionCard, Title, Grid } from './styles';
import cardData from '../../assets/productCategory.json';

export default function NeedHelpOptions() {
  return (
    <PinkContainer>
      <Title>Preciso de ajuda</Title>
      <SubTitle>
        Pode escolher mais de uma opção, tá?
        <br />É muito importante que você descreva a sua necessidade após a
        seleção da categoria, assim fica mais fácil de ajudar!
      </SubTitle>
      <Grid>
        {cardData.map((el) => (
          <OptionCard>
            <img
              src={el.imageUrl}
              alt=''
              style={{ height: '50%', width: '40%' }}
            />
            {el.name}
          </OptionCard>
        ))}
      </Grid>
    </PinkContainer>
  );
}
