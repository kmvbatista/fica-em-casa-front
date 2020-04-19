import React from 'react';
import { Row } from '../../../../../globalComponents';
import {
  Card,
  ModalContainer,
  ConfirmationButton,
  MainContainer,
  ItemsContainer,
  Quantity,
} from '../../../../NeedHelpOptions/ModalContent/styles';
import { getUserData } from '../../../../../services/sessionService';

export default function ModalContent({ necessity, closeModal, personName }) {
  const confirmHelp = () => {
    closeModal();
  };
  const user = getUserData();

  return (
    <ModalContainer>
      <Row style={{ alignItems: 'center' }}>
        <Card style={{ height: '7em', width: '7em' }}>
          <img
            alt={necessity.category}
            src={`./${necessity.category}.svg`}
            style={{ height: '2.5em' }}
          />
        </Card>
        <strong style={{ fontSize: '3em' }}>{necessity.category}</strong>
      </Row>
      <MainContainer>
        <p style={{ marginBottom: '1em', fontSize: '2em' }}>
          {personName} está precisando de ajuda.
        </p>
        <div style={{ marginBottom: '1em' }}>
          <p style={{ fontSize: '1.6em' }}>
            Olá, {user.name}, preciso de ajuda com {necessity.category}.
          </p>
        </div>
        <ItemsContainer>
          {necessity.items &&
            necessity.items.map((it) => (
              <p style={{ fontSize: '1.5em' }}>
                -{`${it.quantity} ${it.unitMeasure} de ${it.item}`}
              </p>
            ))}
        </ItemsContainer>
      </MainContainer>
      <ConfirmationButton onClick={confirmHelp}>
        <strong style={{ fontSize: '1.25em' }}>Quero ajudar</strong>
      </ConfirmationButton>
    </ModalContainer>
  );
}
