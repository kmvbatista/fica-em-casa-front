import React from 'react';
import {
  ColumnContainer,
  Grid,
  OptionCard,
  GridText,
  CardImage,
} from '../../globalComponents';
import { SubTitle, Title } from './styles';
import cardData from '../../assets/productCategory.json';
import { useState } from 'react';
import { useEffect } from 'react';
import * as AssistanceService from '../../services/assistanceService';
import swal from 'sweetalert';
import Loading from 'react-loading';
import IsChecked from '../NeedHelpOptions/isChecked';
import * as UserService from '../../services/userService';

export default function NeedHelpOptions({ children }) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    const userAssistCategories = await UserService.getAssistCategories();
    debugger;
    const dataWithLoading = cardData.map((x) => {
      if (userAssistCategories && userAssistCategories.includes(x.category)) {
        x.isChecked = true;
      }
      return x;
    });
    setCards(dataWithLoading);
  };

  const toggleIsCardChecked = (category) => {
    const index = cards.findIndex((x) => x.category == category);
    cards[index].isChecked = !cards[index].isChecked;
    setCards([...cards]);
  };

  const toggleCardLoading = (category) => {
    const index = cards.findIndex((x) => x.category == category);
    cards[index].isLoading = !cards[index].isLoading;
    setCards([...cards]);
  };

  const postCategoryAssistance = async (category) => {
    toggleCardLoading(category);
    try {
      AssistanceService.postAssistance(
        category,
        toggleCardLoading,
        toggleIsCardChecked,
      );
    } catch (error) {
      swal(
        'Não foi possível adotar a categoria ' + category + '!',
        'Por favor, tente novamente',
        error,
      );
    }
  };

  return (
    <ColumnContainer
      style={{ backgroundColor: 'var(--color-purple)', position: 'relative' }}
    >
      <Title>Quero ajudar</Title>
      <SubTitle>
        Escolha as categorias nas quais você pode ajudar.
        <br />
        Pode escolher mais de uma opção, tá?
      </SubTitle>
      <Grid>
        {cards.map((el) => (
          <OptionCard
            key={el.category}
            style={{ color: 'var(--color-purple)' }}
            onClick={() => postCategoryAssistance(el.category)}
          >
            <IsChecked
              isChecked={el.isChecked}
              color={'var(--color-purple)'}
            ></IsChecked>
            {el.isLoading && !el.isChecked ? (
              <Loading
                height='30%'
                width='30%'
                type='spinningBubbles'
                color='var(--color-purple)'
              ></Loading>
            ) : (
              <img
                src={el.imageUrl}
                alt={el.category}
                style={{ maxHeight: '55%' }}
              />
            )}
            {el.category}
          </OptionCard>
        ))}
        <OptionCard>
          <CardImage src={'./logo.png'} alt={'Outras opçoes'} />
          <GridText>{'Outros'}</GridText>
        </OptionCard>
      </Grid>
      {children}
    </ColumnContainer>
  );
}
