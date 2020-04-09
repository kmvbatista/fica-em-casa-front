import React from 'react';
import { Column, Row } from '../../../globalComponents';
import { ConfirmationButton, Card } from './styles';

export default function ModalContent({ cardInfo }) {
  return (
    <Column style={{ padding: '3em' }}>
      <Row>
        <Card>
          <img
            src={cardInfo.imageUrl}
            style={{ height: '2.5em' }}
            alt={cardInfo.name}
          />
        </Card>
        <strong>{cardInfo.name}</strong>
      </Row>
      <ConfirmationButton>Confirmar</ConfirmationButton>
    </Column>
  );
}
