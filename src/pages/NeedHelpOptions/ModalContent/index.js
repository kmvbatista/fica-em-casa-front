import React from 'react';
import { Row } from '../../../globalComponents';
import {
  ConfirmationButton,
  Card,
  ModalContainer,
  MainContainer,
  ItemsContainer,
  QuantityButton,
  Quantity,
} from './styles';

export default function ModalContent({ cardInfo }) {
  return (
    <ModalContainer>
      <Row style={{ alignItems: 'center' }}>
        <Card>
          <img
            src={cardInfo.imageUrl}
            style={{ height: '2.5em' }}
            alt={cardInfo.name}
          />
        </Card>
        <strong style={{ fontSize: '3em' }}>{cardInfo.name}</strong>
      </Row>
      <MainContainer>
        <p style={{ marginBottom: '1em' }}>
          Digite abaixo o que você está precisando, e, se for necessário,
          especifique a quantidade. Por exemplo:
        </p>
        <div style={{ marginBottom: '1em' }}>
          <p>Olá, preciso de alguém para ir ao mercado.</p>
          <p>Preciso dos seguintes itens: </p>
        </div>
        <ItemsContainer>
          <Row>
            -Candida unid.{' '}
            <Quantity>
              {' '}
              <QuantityButton>+</QuantityButton>2
              <QuantityButton>-</QuantityButton>
            </Quantity>
          </Row>
          <Row>
            -Feijão kg{' '}
            <Quantity>
              {' '}
              <QuantityButton>+</QuantityButton>2
              <QuantityButton>-</QuantityButton>
            </Quantity>
          </Row>
          <Row>
            -Arroz kg{' '}
            <Quantity>
              {' '}
              <QuantityButton>+</QuantityButton>5
              <QuantityButton>-</QuantityButton>
            </Quantity>
          </Row>
          <Row>-Verdura</Row>
          <Row>
            -Papel higiênico unid.{' '}
            <Quantity>
              <QuantityButton>+</QuantityButton>2
              <QuantityButton>-</QuantityButton>
            </Quantity>
          </Row>
          <Row>
            -Sabonete Dove{' '}
            <Quantity>
              {' '}
              <QuantityButton>+</QuantityButton>2
              <QuantityButton>-</QuantityButton>
            </Quantity>
          </Row>
          <Row>
            -Leite un
            <Quantity>
              {' '}
              <QuantityButton>+</QuantityButton>4
              <QuantityButton>-</QuantityButton>
            </Quantity>
          </Row>
          <Row>
            -Ovos un
            <Quantity>
              {' '}
              <QuantityButton>+</QuantityButton>12
              <QuantityButton>-</QuantityButton>
            </Quantity>
          </Row>
        </ItemsContainer>
      </MainContainer>
      <ConfirmationButton>
        <strong style={{ fontSize: '1.25em' }}>Pronto!</strong>
      </ConfirmationButton>
    </ModalContainer>
  );
}
