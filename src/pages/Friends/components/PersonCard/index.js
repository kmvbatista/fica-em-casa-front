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
  const [necessity, setNecessity] = useState();

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  const getModal = () => {
    console.log('getting modal');
    console.log(necessity);
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
    <>
      <Column style={{ marginBottom: '2em' }}>
        <PeopleCard
          key={person.userDistance.toString().slice}
          style={
            !isExpanded
              ? { borderRadius: '10px', backgroundColor: backgroundColor }
              : { backgroundColor: backgroundColor }
          }
        >
          <PersonAvatar
            style={{
              backgroundImage: `url(${person.photoUrl ? '' : './mulher.png'})`,
            }}
          ></PersonAvatar>
          <Column style={{ marginRight: '5%' }}>
            <PersonName>
              <strong style={{ fontSize: 'inherit' }}>{person.userName}</strong>
            </PersonName>
            <Distance>
              {String(person.userDistance * 1000).slice(0, 2)}km perto de você
            </Distance>
          </Column>
          <Row style={{ width: '30%' }}>
            <ContactIcon>
              <a
                href={`https://web.whatsapp.com/send?phone=55${person.userPhone}&text=Olá,%20${person.userName}%20vi%20que%20você%20precisa%20de%20ajuda%20pelo%20fica%20em%20casa`}
              >
                <img
                  src='./whatsapp.svg'
                  alt='whatsapp icon'
                  style={{
                    width: '70%',
                    borderRadius: 'inherit',
                  }}
                />
              </a>
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
                fontSize: '1.7em',
                color: 'var(--color-grey-dark1)',
                fontWeight: '200',
              }}
            >
              {person.userName} {children}
            </p>
            <Row style={{ margin: '.8em 0' }}>
              {person.necessities.map((it) => (
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setNecessity(it);
                    toggleShowModal();
                  }}
                >
                  <HelpOptionCard>
                    <img
                      src={`./${it.category}.svg`}
                      alt={it.category}
                      style={{ width: '2.5em' }}
                    />
                  </HelpOptionCard>
                </div>
              ))}
            </Row>
            <GoToMapsButtonn>
              <GoToMapsIcon src='./location.svg'></GoToMapsIcon>
              <a
                style={{
                  fontSize: '1.5em',
                  textDecoration: 'none',
                  border: 'none',
                  color: '#fff',
                }}
                target='_blank'
                href={`https://www.google.com/maps/dir/-26.921264,-49.148829/${person.userLocation.coordinates[0]},${person.userLocation.coordinates[1]}`}
              >
                Traçar mapa usando o Google Maps
              </a>
            </GoToMapsButtonn>
          </CollapsibleCard>
        </Collapse>
      </Column>
      {showModal && getModal()}
    </>
  );
}
