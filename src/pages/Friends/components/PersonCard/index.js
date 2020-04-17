import React, { useState } from 'react';

import {
  PeopleCard,
  PersonAvatar,
  Distance,
  PersonName,
  ContactIcon,
  CollapsibleCard,
  HelpOptionCard,
  GoToMapsButtonn,
  GoToMapsIcon,
} from './styles';

import { Column, Row } from '../../../../globalComponents';

import Collapse from '@material-ui/core/Collapse';
import ArrowButton from './ArrowButton/arrowButton';
import ModalContent from './ModalContent';
import Modal from '../../../../components/Modal';

export default function PersonCard({ person, backgroundColor, children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  const getModal = (necessity) => {
    return (
      <Modal close={toggleShowModal}>
        <ModalContent
          closeModal={toggleShowModal}
          necessity={necessity}
          personName={person.userName}
        ></ModalContent>
      </Modal>
    );
  };

  return (
    <Column style={{ marginBottom: '2em' }}>
      <PeopleCard
        key={person.userDistance}
        style={
          !isExpanded
            ? { borderRadius: '10px', backgroundColor: backgroundColor }
            : { backgroundColor: backgroundColor }
        }
      >
        <PersonAvatar
          style={{
            backgroundImage: `url(${
              person.photoUrl
                ? ''
                : 'https://assets-br.wemystic.com.br/20191113010228/homem-capri-850x640.jpg'
            })`,
          }}
        ></PersonAvatar>
        <Column style={{ marginRight: '5%' }}>
          <PersonName>
            <strong style={{ fontSize: 'inherit' }}>{person.userName}</strong>
          </PersonName>
          <Distance>{person.userDistance}km perto de você</Distance>
        </Column>
        <Row style={{ width: '30%' }}>
          <ContactIcon>
            <img
              src='./whatsapp.svg'
              alt='whatsapp icon'
              style={{
                width: '70%',
                borderRadius: 'inherit',
              }}
            />
          </ContactIcon>
          <ContactIcon>
            <a href={`tel:${person.userPhone}`}>
              <img
                src='./phone.svg'
                alt='whatsapp icon'
                style={{
                  width: '70%',
                  borderRadius: 'inherit',
                }}
              />
            </a>
          </ContactIcon>
          <div onClick={() => setIsExpanded(!isExpanded)}>
            <ArrowButton></ArrowButton>
          </div>
        </Row>
      </PeopleCard>
      <Collapse in={isExpanded}>
        <CollapsibleCard style={{ backgroundColor: backgroundColor }}>
          <p
            style={{
              fontSize: '1.4em',
              color: 'var(--color-grey-dark1)',
              fontWeight: '200',
            }}
          >
            {person.userName.split(' ')[0]} {children}
          </p>
          <Row style={{ margin: '.8em 0' }}>
            {person.necessities.map((it) => (
              <HelpOptionCard onClick={() => getModal(it)}>
                <img
                  src={`./${it.category}.svg`}
                  alt={it.category}
                  style={{ width: '1.5em', height: '1.5em' }}
                />
              </HelpOptionCard>
            ))}
          </Row>
          <GoToMapsButtonn>
            <GoToMapsIcon src='./location.svg'></GoToMapsIcon>
            <a
              href={`https://www.google.com/maps/dir/-26.921264,-49.148829/${person.userLocation.coordinates[0]},${person.userLocation.coordinates[1]}`}
            >
              Traçar mapa usando o Google Maps
            </a>
          </GoToMapsButtonn>
        </CollapsibleCard>
      </Collapse>
    </Column>
  );
}
