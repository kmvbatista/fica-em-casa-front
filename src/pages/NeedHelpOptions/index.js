import React, { useState, useContext } from 'react';
import {
  ColumnContainer,
  Grid,
  OptionCard,
  GridText,
  SubTitle,
  TextContainer,
  Title,
} from '../../optionsComponents';
import cardsFromJson from '../../assets/productCategory.json';
import Modal from '../../components/Modal';
import ModalContent from './ModalContent';
import { useHistory } from 'react-router-dom';
import IsChecked from '../../components/isChecked';
import * as NecessityService from '../../services/necessityService';
import { useEffect } from 'react';
import swal from 'sweetalert';
import Loading from 'react-loading';
import {
  getUserLocation,
  updateUserLocation,
} from '../../services/locationService';
import LocationErrorMessage from '../Friends/components/LocationErrorMessage';
import Store from '../../services/DefaultContext';
import Menu from '../../components/Menu';
import LongPress from 'react-long';

export default function NeedHelpOptions() {
  const history = useHistory();
  const isFirstAccess = history.location.state;
  const [showModal, setShowModal] = useState(false);
  const [cardSelectedInfo, setCardSelectedInfo] = useState();
  const [cards, setCards] = useState([]);
  const [jsonCards, setJsonCards] = useState(Object.assign([], cardsFromJson));
  const [deleteOrUpdateCard, setDeleteOrUpdateModal] = useState(false);
  const [userLocation, setUserLocation] = useState({});
  const [didUpdatedLocation, setDidUpdatedLocation] = useState(false);
  const store = useContext(Store);
  useEffect(() => {
    verifyLocation();
  }, []);

  const getModal = () => {
    return (
      <Modal close={toggleShowModal}>
        <ModalContent
          cardInfo={cardSelectedInfo}
          closeModal={toggleShowModal}
          setCardChecked={toggleIsCardChecked}
          setDeleteCardModal={setDeleteOrUpdateModal}
          deleteOrUpdateCard={deleteOrUpdateCard}
          refresh={getCards}
          userLocation={userLocation}
          updateLocation={updateLocation}
        ></ModalContent>
      </Modal>
    );
  };

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
      setUserLocation(undefined);
    }
  }

  async function getCards() {
    try {
      const userNecessities = await NecessityService.getUserNecessities();
      if (!userNecessities || userNecessities.length === 0) {
        return setCards([...jsonCards]);
      }
      const dataWithLoading = jsonCards.map((cat) => {
        const categoryAssist = userNecessities.find(
          (x) => x.category === cat.category,
        );
        return {
          category: cat.category,
          items: categoryAssist && categoryAssist.items,
          imageUrl: cat.imageUrl,
          isChecked: categoryAssist !== undefined,
          isSimple: cat.isSimple,
        };
      });
      setCards(dataWithLoading);
    } catch (error) {
      swal(
        error.response
          ? error.response.data.error
          : 'Houve um erro ao buscar suas necessidades!',
        'Tente novamente mais tarde!',
        'error',
      );
    }
  }

  function handleCardClick(card) {
    if (card.isChecked) {
      return handleCheckedCardClick(card);
    }
    if (card.isSimple) {
      return postSimpleNecessity(card.category);
    }
    setCardSelectedInfo(card);
    toggleShowModal();
  }

  function handleCheckedCardClick(card) {
    if (card.isSimple) {
      return deleteSimpleCard(card.items[0]._id, card.category);
    }
    setDeleteOrUpdateModal(true);
    setCardSelectedInfo(card);
    toggleShowModal();
  }

  async function deleteSimpleCard(id, category) {
    try {
      toggleCardLoading(category);
      await NecessityService.deleteSimpleNecessity(id);
      toggleCardLoading(category);
      store.helpers = undefined;
    } catch (error) {
      toggleCardLoading(category);
      toggleIsCardChecked(category);
      swal(`Houve um erro ao apagar a necessidade ${category}`, '', 'info');
    }
  }

  async function postSimpleNecessity(category) {
    try {
      toggleCardLoading(category);
      const newNecessity = await NecessityService.postNecessity(category);
      toggleCardLoading(category);
      setCardChecked(category, newNecessity[0]._id);
      updateLocation();
      store.helpers = undefined;
    } catch (error) {}
  }

  const goToFriends = () => {
    if (isFirstAccess) {
      history.replace('help-or-be-helped');
    } else {
      history.replace('friends');
    }
  };

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  const setCardChecked = (categoryName, newNecessityId) => {
    const cardIndex = cards.findIndex((x) => x.category === categoryName);
    cards[cardIndex].items = [{ _id: newNecessityId }];
    setCards([...cards]);
    toggleIsCardChecked(categoryName);
  };

  const toggleIsCardChecked = (category) => {
    const newCards = cards.map((cat) => {
      return {
        category: cat.category,
        items: cat.items,
        imageUrl: cat.imageUrl,
        isChecked: category === cat.category ? !cat.isChecked : cat.isChecked,
        isSimple: cat.isSimple,
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

  function handleCardLongPress(card) {
    if (card.isChecked) {
      swal(
        'Deseja remover a necessidade em ' + card.category + '?',
        '',
        'warning',
        {
          buttons: ['Não', 'Sim'],
          dangerMode: true,
        },
      ).then((accepted) => {
        if (accepted) {
          deleteCategory(card.category);
        }
      });
    }
  }

  async function deleteCategory(category) {
    try {
      toggleCardLoading(category);
      await NecessityService.deleteByCategory(category);
      toggleCardLoading(category);
      store.helpers = undefined;
      swal('Dados atualizados com sucesso', '', 'success');
      getCards();
      updateLocation();
    } catch (error) {
      toggleCardLoading(category);
      swal('Houve um erro na atualização', '', 'error');
    }
  }

  async function updateLocation() {
    if (!didUpdatedLocation && userLocation) {
      await updateUserLocation(userLocation);
      setDidUpdatedLocation(true);
    }
  }

  return (
    <ColumnContainer
      style={cards.length === 0 ? { justifyContent: 'flex-start' } : {}}
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
          buttonsColor={'var(--color-purple)'}
        ></LocationErrorMessage>
      ) : (
        <TextContainer>
          <Title>Preciso de ajuda</Title>
          <SubTitle>
          É muito importante que você descreva sua necessidade 
          quando escolher a categoria, assim fica mais fácil encontrar 
          quem pode te ajudar! Ah, e você pode escolher mais de uma opção, ta? 😀
          </SubTitle>
        </TextContainer>
      )}

      {userLocation &&
        (cards.length > 0 ? (
          <>
            <Grid>
              {cards.map((el) => (
                <LongPress
                  time={500}
                  onLongPress={() => handleCardLongPress(el)}
                >
                  <OptionCard
                    key={el.category}
                    onClick={() => handleCardClick(el)}
                  >
                    <IsChecked
                      isChecked={el.isChecked}
                      color={'var(--color-pink)'}
                    ></IsChecked>
                    {el.isLoading && !el.isChecked ? (
                      <Loading
                        height='30%'
                        width='30%'
                        type='spinningBubbles'
                        color='var(--color-pink)'
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
                </LongPress>
              ))}
            </Grid>
            <img
              onClick={() => history.push('friends', { isHelper: true })}
              src='./next.svg'
              style={{
                width: '3.5em',
                height: '3.5em',
                cursor: 'pointer',
                marginBottom: '1em',
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
      {showModal && getModal()}
    </ColumnContainer>
  );
}
