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
import Collapse from 'react-expand-animated';
import ArrowButton from './ArrowButton/arrowButton';
import ModalContent from './ModalContent';
import Modal from '../../../../components/Modal';
import CategoriesList from './CategoriesList';

export default function PersonCard({
  person,
  backgroundColor,
  children,
  userLocation,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [necessity, setNecessity] = useState();

  let [necessities, setNecessities] = useState(person.necessities);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  function turnCategoryPending(category) {
    const index = necessities.findIndex((x) => x.category === category);
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
              <strong style={{ fontSize: '.9em' }}>
                {person.userName.split(' ')[0]}
              </strong>
            </PersonName>
            {person.distance && (
              <Distance>{person.distance}km perto de você</Distance>
            )}
          </Column>
          <ContactIcon>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={`https://web.whatsapp.com/send?phone=${person.userPhone}&text=Olá,%20${person.userName}%20vi%20que%20você%20precisa%20de%20ajuda%20pelo%20fica%20em%20casa`}
            >
              <img
                src='./whatsapp.svg'
                alt='whatsapp icon'
                style={{
                  width: '1.7em',
                  height: '1.7em',
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
                  width: '1.7em',
                  height: '1.7em',
                  borderRadius: 'inherit',
                }}
              />
            </a>
          </ContactIcon>
          <div onClick={() => setIsExpanded(!isExpanded)}>
            <ArrowButton isExpanded={isExpanded}></ArrowButton>
          </div>
        </PeopleCard>
        <Collapse
          open={isExpanded}
          duration={300}
          transitions={['height', 'opacity', 'background']}
        >
          <CollapsibleCard
            style={{ backgroundColor: backgroundColor, marginTop: '1px' }}
          >
            <p
              style={{
                fontSize: '1.7em',
                color: 'var(--color-grey-dark1)',
                fontWeight: '400',
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
            {person.coordinates.latitude && userLocation && (
              <GoToMapsButtonn>
                <GoToMapsIcon src='./location.svg'></GoToMapsIcon>
                <a
                  style={{
                    fontSize: '1.5em',
                    textDecoration: 'none',
                    border: 'none',
                    color: '#fff',
                    paddingLeft: '3em',
                  }}
                  target='_blank'
                  rel='noopener noreferrer'
                  href={`https://www.google.com/maps/dir/${userLocation.latitude},${userLocation.longitude}/${person.coordinates.latitude},${person.coordinates.longitude}`}
                >
                  Traçar mapa usando o Google Maps
                </a>
              </GoToMapsButtonn>
            )}
          </CollapsibleCard>
        </Collapse>
      </Column>
      {showModal && getModal()}
    </>
  );
}
