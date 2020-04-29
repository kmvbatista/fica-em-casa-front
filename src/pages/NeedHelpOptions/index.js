import React, { useState, useContext } from 'react';
import {
  ColumnContainer,
  Grid,
  OptionCard,
  GridText,
  CardImage,
  SubTitle,
  TextContainer,
  Title,
  GoToNextPage,
} from '../../optionsComponents';
import jsonCards from '../../assets/productCategory.json';
import Modal from '../../components/Modal';
import ModalContent from './ModalContent';
import { useHistory } from 'react-router-dom';
import IsChecked from '../../components/isChecked';
import { Column } from '../../globalComponents';
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

export default function NeedHelpOptions({ children }) {
  const history = useHistory();
  const isFirstAccess = history.location.state;
  const [showModal, setShowModal] = useState(false);
  const [cardSelectedInfo, setCardSelectedInfo] = useState();
  const [cards, setCards] = useState([]);
  const [deleteOrUpdateCard, setDeleteOrUpdateModal] = useState(false);
  const [userLocation, setUserLocation] = useState({});
  const [didUpdatedLocation, setDidUpdatedLocation] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
          setCardChecked={setCardChecked}
          setDeleteCardModal={setDeleteOrUpdateModal}
          deleteOrUpdateCard={deleteOrUpdateCard}
          refresh={getCards}
          userLocation={userLocation}
        ></ModalContent>
      </Modal>
    );
  };

  async function verifyLocation() {
    try {
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
    } catch (error) {
      setIsLoading(false);
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
      swal(`Queres apagar a necessidade ${category}`, '', 'info').then(
        async (accepted) => {
          if (accepted) {
            toggleIsCardChecked(category);
            toggleCardLoading(category);
            await NecessityService.deleteSimpleNecessity(id);
            toggleCardLoading(category);
          }
        },
      );
    } catch (error) {
      toggleCardLoading(category);
      toggleIsCardChecked(category);
      swal(`Houve um erro ao apagar a necessidade ${category}`, '', 'info');
    }
  }

  async function postSimpleNecessity(category) {
    try {
      await NecessityService.postNecessity(category);
      setCardChecked(category);
      if (!didUpdatedLocation && userLocation) {
        await updateUserLocation(userLocation);
        setDidUpdatedLocation(true);
      }
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

  const setCardChecked = (categoryName) => {
    const cardIndex = cards.findIndex((x) => x.category === categoryName);
    cards[cardIndex].isChecked = true;
    setCards([...cards]);
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

  return (
    <ColumnContainer style={{ position: 'relative' }}>
      {children}
      <Column style={{ alignItems: 'center' }}>
        {!userLocation ? (
          <LocationErrorMessage
            buttonsColor={'var(--color-purple)'}
          ></LocationErrorMessage>
        ) : (
          <TextContainer>
            <Title>Preciso de ajuda</Title>
            <SubTitle>
              Pode escolher mais de uma opção, tá?
              <br />É muito importante que você descreva a sua necessidade após
              a seleção da categoria, assim fica mais fácil de ajudar!
            </SubTitle>
          </TextContainer>
        )}

        {userLocation &&
          (isLoading ? (
            <>
              <Grid>
                {cards.map((el) => (
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
                <OptionCard>
                  <CardImage src={'./ficaemcasa.svg'} alt={'Outras opçoes'} />
                  <GridText>{'Outros'}</GridText>
                </OptionCard>
              </Grid>
              <GoToNextPage>
                <img
                  onClick={() => history.push('friends')}
                  src='./next.svg'
                  style={{ width: '3.5em', cursor: 'pointer' }}
                  alt='ver amigos'
                />
              </GoToNextPage>
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
      {showModal && getModal()}
    </ColumnContainer>
  );
}
