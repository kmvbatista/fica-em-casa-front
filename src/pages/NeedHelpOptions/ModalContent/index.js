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
            -Candida .{' '}
            <Quantity>
              un<QuantityButton>+</QuantityButton>
              <div>2</div>
              <QuantityButton>-</QuantityButton>
            </Quantity>
          </Row>
          <Row>
            -Feijão{' '}
            <Quantity>
              kg <QuantityButton>+</QuantityButton>
              <div>2</div>
              <QuantityButton>-</QuantityButton>
            </Quantity>
          </Row>
          <Row>
            -Arroz{' '}
            <Quantity>
              kg <QuantityButton>+</QuantityButton>
              <div>5</div>
              <QuantityButton>-</QuantityButton>
            </Quantity>
          </Row>
          <Row>-Verdura</Row>

          <Row>
            -Sabonete Dove{' '}
            <Quantity>
              un <QuantityButton>+</QuantityButton>
              <div>2</div>
              <QuantityButton>-</QuantityButton>
            </Quantity>
          </Row>
          <Row>
            -Leite
            <Quantity>
              un <QuantityButton>+</QuantityButton>
              <div>4</div>
              <QuantityButton>-</QuantityButton>
            </Quantity>
          </Row>
          <Row>
            -Ovos
            <Quantity>
              un <QuantityButton>+</QuantityButton>
              <div>12</div>
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
