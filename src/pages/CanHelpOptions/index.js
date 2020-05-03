import React, { useState, useEffect, useContext } from 'react';
import {
  ColumnContainer,
  Grid,
  OptionCard,
  GridText,
  SubTitle,
  Title,
  TextContainer,
} from '../../optionsComponents';
import { Column } from '../../globalComponents';
import cardsFromJson from '../../assets/productCategory.json';
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
import LocationErrorMessage from '../Friends/components/LocationErrorMessage';
import Store from '../../services/DefaultContext';

export default function NeedHelpOptions({ children }) {
  const store = useContext(Store);
  const [userLocation, setUserLocation] = useState({});
  const [hasRegisteredOption, setRegisteredOption] = useState(false);
  const [cards, setCards] = useState([]);
  const jsonCards = [...cardsFromJson];
  const history = useHistory();

  useEffect(() => {
    verifyLocation();
  }, []);

  async function verifyLocation() {
    if (!store.location) {
      const coords = await getUserLocation();
      const newLocation = {
        latitude: coords.latitude,
        longitude: coords.longitude,
      };
      setUserLocation(newLocation);
      store.location = newLocation;
      getCards();
    } else {
      setUserLocation(store.location);
      getCards();
    }
  }

  const getCards = async () => {
    const userAssistCategories = await UserService.getAssistCategories();
    if (!userAssistCategories || userAssistCategories.length === 0) {
      return setCards([...jsonCards]);
    }
    const dataWithLoading = jsonCards.map((cat) => {
      const categoryAssist = userAssistCategories.find(
        (x) => x.category === cat.category,
      );
      return {
        category: cat.category,
        imageUrl: cat.imageUrl,
        isChecked: categoryAssist !== undefined,
        id: categoryAssist && categoryAssist._id,
      };
    });
    setCards(dataWithLoading);
  };

  const toggleIsCardChecked = (category) => {
    const index = cards.findIndex((x) => x.category === category);
    cards[index].isChecked = !cards[index].isChecked;
    setCards([...cards]);
  };

  const setCardId = (category, cardId) => {
    const index = cards.findIndex((x) => x.category === category);
    cards[index].id = cardId;
    setCards([...cards]);
  };

  const toggleCardLoading = (category) => {
    const index = cards.findIndex((x) => x.category === category);
    cards[index].isLoading = !cards[index].isLoading;
    setCards([...cards]);
  };

  async function postCategoryAssistance(category) {
    try {
      const newAssist = await AssistanceService.postAssistance(category);
      toggleIsCardChecked(category);
      setCardId(category, newAssist._id);
      if (!hasRegisteredOption) {
        updateUserLocation(userLocation).then((x) => setRegisteredOption(true));
      }
    } catch (error) {
      swal(
        'Não foi possível adotar a categoria ' + category + '!',
        'Por favor, tente novamente',
        'error',
      );
    }
  }

  async function deleteAssist(card) {
    try {
      toggleIsCardChecked(card.category);
      await AssistanceService.deleteAssistance(card.id);
    } catch (error) {
      toggleIsCardChecked(card.category);
      swal(
        'Não foi possível remover a categoria ' + card.category + '!',
        'Por favor, tente novamente',
        'error',
      );
    }
  }

  async function handleCardClick(card) {
    toggleCardLoading(card.category);
    if (card.isChecked) {
      await deleteAssist(card);
    } else {
      await postCategoryAssistance(card.category);
    }
    toggleCardLoading(card.category);
  }

  return (
    <ColumnContainer
      style={{ backgroundColor: 'var(--color-purple)', position: 'relative' }}
    >
      <Column style={{ alignItems: 'center' }}>
        {!userLocation ? (
          <LocationErrorMessage
            buttonsColor={'var(--color-pink)'}
          ></LocationErrorMessage>
        ) : (
          <TextContainer>
            <Title>Quero ajudar</Title>
            <SubTitle>
              Escolha as categorias nas quais você pode ajudar.
              <br />
              Pode escolher mais de uma opção, tá?
            </SubTitle>
          </TextContainer>
        )}
        {userLocation &&
          (cards.length > 0 ? (
            <>
              <Grid>
                {cards.map((el) => (
                  <OptionCard
                    key={el.category}
                    style={{ color: 'var(--color-purple)' }}
                    onClick={() => handleCardClick(el)}
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
                    <GridText>{el.category}</GridText>
                  </OptionCard>
                ))}
              </Grid>
              <img
                onClick={() => history.push('friends')}
                src='./next.svg'
                style={{
                  width: '3.5em',
                  height: '3.5em',
                  paddingBottom: '1em',
                  cursor: 'pointer',
                }}
                alt='ver amigos'
              />
            </>
          ) : (
            <Loading
              width={'10em'}
              height={'10em'}
              type={'spinningBubbles'}
              color={'white'}
            ></Loading>
          ))}
      </Column>
      {children}
    </ColumnContainer>
  );
}
