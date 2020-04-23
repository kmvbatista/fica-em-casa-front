import React, { useState } from 'react';
import { Row } from '../../../../../globalComponents';
import {
  Card,
  ModalContainer,
  ConfirmationButton,
  MainContainer,
  ItemsContainer,
} from '../../../../NeedHelpOptions/ModalContent/styles';
import { getUserData } from '../../../../../services/sessionService';
import api from '../../../../../services/api';
import Loading from 'react-loading';
import swal from 'sweetalert';

export default function ModalContent({
  necessity,
  closeModal,
  personName,
  personId,
}) {
  const [isLoading, setLoading] = useState(false);
  const user = getUserData();
  async function confirmHelp() {
    try {
      setLoading(true);
      await api.put('/necessity', {
        status: 'pending',
        category: necessity.category,
        userId: personId,
      });
      closeModal();
      setLoading(false);
    } catch (error) {
      console.log(JSON.stringify(error));
      closeModal();
      swal(
        'Houve um erro na confirmação de ajuda',
        'Tente novamente!',
        'error',
      );
      setLoading(false);
    }
  }

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
              <p
                key={necessity.items.findIndex((x) => x === it)}
                style={{ fontSize: '1.5em' }}
              >
                -{`${it.quantity} ${it.measureUnit}(s) de ${it.item}`}
              </p>
            ))}
        </ItemsContainer>
      </MainContainer>
      {isLoading ? (
        <Loading
          width='5em'
          height='5em'
          color={'var(--color-yellow)'}
          type='spinningBubbles'
        ></Loading>
      ) : (
        <ConfirmationButton onClick={confirmHelp}>
          <strong style={{ fontSize: '1.25em' }}>Quero ajudar</strong>
        </ConfirmationButton>
      )}
    </ModalContainer>
  );
}
