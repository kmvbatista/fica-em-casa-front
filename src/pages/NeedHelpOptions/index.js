import React, { useState } from 'react';
import {
  ColumnContainer,
  Grid,
  OptionCard,
  GridText,
  CardImage,
  SubTitle,
  TextContainer,
  Title,
} from '../../optionsComponents';
import cardData from '../../assets/productCategory.json';
import Modal from '../../components/Modal';
import ModalContent from './ModalContent';
import { useHistory } from 'react-router-dom';
import IsChecked from '../../components/isChecked';
import { Column } from '../../globalComponents';

export default function NeedHelpOptions({ children }) {
  const history = useHistory();
  const isFirstAccess = history.location.state;
  const [showModal, setShowModal] = useState(false);
  const [cardSelectedInfo, setCardSelectedInfo] = useState();
  const [cards, setCards] = useState(cardData);

  const getModal = () => {
    return (
      <Modal close={toggleShowModal}>
        <ModalContent
          cardInfo={cardSelectedInfo}
          closeModal={toggleShowModal}
          setCardChecked={setCardChecked}
        ></ModalContent>
      </Modal>
    );
  };

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  const setCardChecked = (categoryName) => {
    const cardIndex = cards.findIndex((x) => x.category === categoryName);
    cards[cardIndex].isChecked = true;
    setCards([...cards]);
  };

  const goToFriends = () => {
    if (isFirstAccess) {
      history.replace('help-or-be-helped');
    } else {
      history.replace('friends');
    }
  };

  return (
    <ColumnContainer style={{ position: 'relative' }}>
      {children}
      <Column style={{ alignItems: 'center' }}>
        <TextContainer>
          <Title>Preciso de ajuda</Title>
          <SubTitle>
            Pode escolher mais de uma opção, tá?
            <br />É muito importante que você descreva a sua necessidade após a
            seleção da categoria, assim fica mais fácil de ajudar!
          </SubTitle>
        </TextContainer>
        <Grid>
          {cards.map((el) => (
            <OptionCard
              key={el.category}
              onClick={() => {
                setCardSelectedInfo(el);
                toggleShowModal();
              }}
            >
              <IsChecked
                isChecked={el.isChecked}
                color={'var(--color-pink)'}
              ></IsChecked>
              <CardImage src={el.imageUrl} alt={el.category} />
              <GridText>{el.category}</GridText>
            </OptionCard>
          ))}
          <OptionCard>
            <CardImage src={'./logo.png'} alt={'Outras opçoes'} />
            <GridText>{'Outros'}</GridText>
          </OptionCard>
        </Grid>
      </Column>
      {children}
      {showModal && getModal()}
    </ColumnContainer>
  );
}
