import React from 'react';
import {
  ColumnContainer,
  Grid,
  OptionCard,
  GetModalButton,
} from '../../globalComponents';
import { SubTitle, Title } from './styles';
import cardData from '../../assets/productCategory.json';
import { useState } from 'react';
import { useEffect } from 'react';
import * as AssistanceService from '../../services/assistanceService';
import swal from 'sweetalert';
import Loading from 'react-loading';
import IsChecked from '../NeedHelpOptions/isChecked';

export default function NeedHelpOptions() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    getCards();
  }, []);

  const getCards = () => {
    const dataWithLoading = cardData.map((x) => {
      x.isLoading = false;
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
    <ColumnContainer style={{ backgroundColor: 'var(--color-purple)' }}>
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
            <IsChecked isChecked={el.isChecked}></IsChecked>
            {el.isLoading ? (
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
