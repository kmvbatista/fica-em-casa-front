import React, { useState, useEffect } from 'react';
import {
  ColumnContainer,
  Grid,
  OptionCard,
  GridText,
  CardImage,
  SubTitle,
  Title,
  TextContainer,
} from '../../optionsComponents';
import { Column } from '../../globalComponents';
import cardData from '../../assets/productCategory.json';
import * as AssistanceService from '../../services/assistanceService';
import swal from 'sweetalert';
import Loading from 'react-loading';
import IsChecked from '../../components/isChecked';
import * as UserService from '../../services/userService';
import {
  getUserLocation,
  updateUserLocation,
} from '../../services/locationService';
import { useHistory } from 'react-router-dom';

export default function NeedHelpOptions({ children }) {
  const [isFirstAcess, setIsFirstAccess] = useState(false);
  const [userLocation, setUserLocation] = useState();
  const [hasRegisteredOption, setRegisteredOption] = useState(false);
  const [cards, setCards] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setCurrentLocation();
    getCards();
  }, []);

  async function setCurrentLocation() {
    try {
      const location = await getUserLocation();
      setUserLocation(location);
    } catch (error) {
      swal(error, 'Tente novamente', 'error');
    }
  }

  const getCards = async () => {
    const userAssistCategories = await UserService.getAssistCategories();
    const dataWithLoading = cardData.map((x) => {
      if (
        userAssistCategories &&
        userAssistCategories.find((y) => y.category === x.category)
      ) {
        x.isChecked = true;
      }
      return x;
    });
    setCards(dataWithLoading);
  };

  const toggleIsCardChecked = (category) => {
    const index = cards.findIndex((x) => x.category === category);
    cards[index].isChecked = !cards[index].isChecked;
    setCards([...cards]);
  };

  const toggleCardLoading = (category) => {
    const index = cards.findIndex((x) => x.category === category);
    cards[index].isLoading = !cards[index].isLoading;
    setCards([...cards]);
  };

  async function postCategoryAssistance(category) {
    toggleCardLoading(category);
    try {
      AssistanceService.postAssistance(
        category,
        toggleCardLoading,
        toggleIsCardChecked,
      ).then((_) => {
        if (!hasRegisteredOption) {
          updateUserLocation(userLocation).then((x) =>
            setRegisteredOption(true),
          );
        }
      });
    } catch (error) {
      swal(
        'Não foi possível adotar a categoria ' + category + '!',
        'Por favor, tente novamente',
        'error',
      );
    }
  }

  return (
    <ColumnContainer
      style={{ backgroundColor: 'var(--color-purple)', position: 'relative' }}
    >
      <Column style={{ alignItems: 'center' }}>
        <TextContainer>
          <Title>Quero ajudar</Title>
          <SubTitle>
            Escolha as categorias nas quais você pode ajudar.
            <br />
            Pode escolher mais de uma opção, tá?
          </SubTitle>
        </TextContainer>
        {cards.length > 0 ? (
          <Grid>
            {cards.map((el) => (
              <OptionCard
                key={el.category}
                style={{ color: 'var(--color-purple)' }}
                onClick={() => {
                  if (!el.isChecked) {
                    postCategoryAssistance(el.category);
                  }
                }}
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
        ) : (
          <Loading
            width={'10em'}
            height={'10em'}
            type={'spinningBubbles'}
            color={'white'}
          ></Loading>
        )}
      </Column>
      {children}
    </ColumnContainer>
  );
}
