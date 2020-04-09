import React, { useState } from 'react';
import {
  ColumnContainer,
  Grid,
  OptionCard,
  GetModalButton,
  GridText,
} from '../../globalComponents';
import { SubTitle, Title } from './styles';
import cardData from '../../assets/productCategory.json';
import Modal from '../../components/Modal';
import ModalContent from './ModalContent';

export default function NeedHelpOptions() {
  const [showModal, setShowModal] = useState(false);
  const [cardSelectedInfo, setCardSelectedInfo] = useState();

  const getModal = () => {
    return (
      <Modal close={() => setShowModal(false)}>
        <ModalContent cardInfo={cardSelectedInfo}></ModalContent>
      </Modal>
    );
  };

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
          <OptionCard
            key={el.name}
            onClick={() => {
              setCardSelectedInfo(el);
              setShowModal(true);
            }}
          >
            <img src={el.imageUrl} alt={el.name} style={{ height: '2.5em' }} />
            <GridText>{el.name}</GridText>
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
      {showModal && getModal()}
    </ColumnContainer>
  );
}
