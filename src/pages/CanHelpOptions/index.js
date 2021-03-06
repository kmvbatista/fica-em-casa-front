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
import Menu from '../../components/Menu';

export default function NeedHelpOptions() {
  const store = useContext(Store);
  const [userLocation, setUserLocation] = useState({});
  const [hasRegisteredOption, setRegisteredOption] = useState(false);
  const [cards, setCards] = useState([]);
  const jsonCards = Object.assign([], cardsFromJson);
  const history = useHistory();

  useEffect(() => {
    verifyLocation();
  }, []);

  async function verifyLocation() {
    try {
      if (!store.location) {
        const coords = await getUserLocation();
        if (!coords) {
          return setUserLocation(undefined);
        }
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
    } catch (error) {
      return setUserLocation(undefined);
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

  const setIsCardChecked = (category, id) => {
    const newCards = cards.map((cat) => {
      if (category !== cat.category) {
        return Object.assign({}, cat);
      }
      return {
        category: cat.category,
        items: cat.items,
        imageUrl: cat.imageUrl,
        isChecked: true,
        id: id || cat.id,
      };
    });
    setCards(Object.assign([], newCards));
  };

  const toggleCardLoading = (category) => {
    const index = cards.findIndex((x) => x.category === category);
    cards[index].isChecked = false;
    cards[index].isLoading = !cards[index].isLoading;
    setCards([...cards]);
  };

  async function postCategoryAssistance(category) {
    try {
      toggleCardLoading(category);
      const newAssist = await AssistanceService.postAssistance(category);
      toggleCardLoading(category);
      if (!hasRegisteredOption) {
        updateUserLocation(userLocation).then((x) => setRegisteredOption(true));
      }
      setIsCardChecked(category, newAssist._id);
      store.needyPeople = undefined;
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
      toggleCardLoading(card.category);
      await AssistanceService.deleteAssistance(card.id);
      toggleCardLoading(card.category);
      store.needyPeople = undefined;
    } catch (error) {
      swal(
        'Não foi possível remover a categoria ' + card.category + '!',
        'Por favor, tente novamente',
        'error',
      );
    }
  }

  async function handleCardClick(card) {
    // toggleCardLoading(card.category);
    if (card.isChecked) {
      await deleteAssist(card);
    } else {
      await postCategoryAssistance(card.category);
    }
    // toggleCardLoading(card.category);
  }

  return (
    <ColumnContainer
      style={
        cards.length === 0
          ? {
              justifyContent: 'flex-start',
              backgroundColor: 'var(--color-purple)',
            }
          : {
              backgroundColor: 'var(--color-purple)',
            }
      }
    >
      <Menu
        customStyle={{
          backgroundColor: 'inherit',
          position: 'relative',
          width: '100%',
        }}
      ></Menu>
      {!userLocation ? (
        <LocationErrorMessage
          buttonsColor={'var(--color-pink)'}
        ></LocationErrorMessage>
      ) : (
        <TextContainer>
          <Title>Quero ajudar</Title>
          <SubTitle>
          É muito importante que você selecione apenas as categorias 
          em que realmente consiga ajudar. 
           Assim não fica pesado para ninguém. 😉
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
              onClick={() => history.push('friends', { isHelper: false })}
              src='./next.svg'
              style={{
                width: '3.5em',
                height: '3.5em',
                marginBottom: '1em',
                cursor: 'pointer',
                margin: '5% 0',
              }}
              alt='ver amigos'
            />
          </>
        ) : (
          <div style={{ marginTop: '20vh' }}>
            <Loading
              width={'10em'}
              height={'10em'}
              type={'spinningBubbles'}
              color={'white'}
            ></Loading>
          </div>
        ))}
    </ColumnContainer>
  );
}
