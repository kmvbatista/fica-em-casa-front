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

export default function ModalContent({ necessity, closeModal, personName }) {
  const confirmHelp = () => {
    closeModal();
  };

  return (
    <ModalContainer>
      <Row style={{ alignItems: 'center' }}>
        <Card>
          <img
            alt={necessity.category}
            src={`./${necessity.category}.svg`}
            style={{ height: '2.5em' }}
          />
        </Card>
        <strong style={{ fontSize: '3em' }}>{necessity.category}</strong>
      </Row>
      <MainContainer>
        <p style={{ marginBottom: '1em' }}>
          Olá, o {personName} está precisando de ajuda.
        </p>
        <div style={{ marginBottom: '1em' }}>
          <p> Por exemplo:</p>
          <p>Olá, preciso de ajuda com {necessity.category.toLowerCase()}.</p>
          {necessity.items && necessity.items.length > 0 ? (
            <p>Preciso dos seguintes itens: </p>
          ) : null}
        </div>
        <ItemsContainer>
          {necessity.items.map((it) => (
            <Row key={it.item}>
              -{it.item}
              <Quantity>
                {it.unitMeasure}
                <div>{it.quantity}</div>
              </Quantity>
            </Row>
          ))}
        </ItemsContainer>
      </MainContainer>
      <ConfirmationButton onClick={confirmHelp}>
        <strong style={{ fontSize: '1.25em' }}>Quero ajudar</strong>
      </ConfirmationButton>
    </ModalContainer>
  );
}
