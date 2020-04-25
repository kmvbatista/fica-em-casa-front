import React, { useState } from 'react';

import {
  PeopleCard,
  PersonAvatar,
  Distance,
  PersonName,
  ContactIcon,
  CollapsibleCard,
  GoToMapsButtonn,
  GoToMapsIcon,
} from './styles';

import { Column, Row } from '../../../../globalComponents';

import Collapse from '@material-ui/core/Collapse';
import ArrowButton from './ArrowButton/arrowButton';
import ModalContent from './ModalContent';
import Modal from '../../../../components/Modal';
import CategoriesList from './CategoriesList';

export default function PersonCard({ person, backgroundColor, children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [necessity, setNecessity] = useState();
  let [necessities, setNecessities] = useState(person.necessities);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  function turnCategoryPending(category) {
    const index = necessities.findIndex((x) => x.category == category);
    necessities[index].status = 'pending';
    setNecessities([...necessities]);
  }

  const getModal = () => {
    return (
      <Modal close={toggleShowModal}>
        <ModalContent
          closeModal={toggleShowModal}
          necessity={necessity}
          personName={person.userName}
          personId={person.userId}
          turnCategoryPending={turnCategoryPending}
        ></ModalContent>
      </Modal>
    );
  };

  return (
    <>
      <Column>
        <PeopleCard
          key={person.userName}
          style={
            !isExpanded
              ? { borderRadius: '10px', backgroundColor: backgroundColor }
              : { backgroundColor: backgroundColor }
          }
        >
          <PersonAvatar
            style={{
              backgroundImage: `url(${
                person.userPhoto ? person.userPhoto : './user.svg'
              })`,
            }}
          ></PersonAvatar>
          <Column style={{ marginRight: '5%' }}>
            <PersonName>
              <strong style={{ fontSize: 'inherit' }}>{person.userName}</strong>
            </PersonName>
            <Distance>{person.distance}km perto de você</Distance>
          </Column>
          <Row style={{ width: '30%' }}>
            <ContactIcon>
              <a
                href={`https://web.whatsapp.com/send?phone=${person.userPhone}&text=Olá,%20${person.userName}%20vi%20que%20você%20precisa%20de%20ajuda%20pelo%20fica%20em%20casa`}
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
            <CategoriesList
              personName={person.userName}
              setNecessity={setNecessity}
              toggleShowModal={toggleShowModal}
              necessities={necessities}
              helperCategories={person.categoriesToHelp}
            ></CategoriesList>
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
                href={`https://www.google.com/maps/dir/-26.921264,-49.148829/${person.userCoordinates.latitude},${person.userCoordinates.longitude}`}
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
