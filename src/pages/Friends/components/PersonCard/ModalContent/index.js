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
import Share from '../../../../../components/Share';
import jsonCards from '../../../../../assets/productCategory.json';

export default function ModalContent({
  necessity,
  closeModal,
  personName,
  personId,
  turnCategoryPending,
}) {
  const [isLoading, setLoading] = useState(false);
  const user = getUserData();
  const isSimple = jsonCards.find(
    (x) => x.category === necessity.category && x.isSimple,
  );

  async function confirmHelp() {
    try {
      setLoading(true);
      await api.put('/necessity', {
        status: 'pending',
        categoriesToUpdate: [necessity.category],
        userId: personId,
      });
      closeModal();
      setLoading(false);
      swal({
        content: Share(),
        buttons: {},
      });
      turnCategoryPending(necessity.category);
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
            style={{ width: '5em' }}
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
          {!isSimple &&
            necessity.items &&
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
        <Row style={{ width: '100%', justifyContent: 'center' }}>
          <Loading
            width='5em'
            height='5em'
            color={'var(--color-yellow)'}
            type='spinningBubbles'
          ></Loading>
        </Row>
      ) : (
        <ConfirmationButton onClick={confirmHelp}>
          <strong style={{ fontSize: '1.25em' }}>Quero ajudar</strong>
        </ConfirmationButton>
      )}
    </ModalContainer>
  );
}
