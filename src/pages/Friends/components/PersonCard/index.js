import React, { useState } from 'react';

import {
  PeopleCard,
  PersonAvatar,
  Distance,
  PersonName,
  ContactIcon,
  CollapsibleCard,
  ContactContainer,
} from './styles';

import { Column, Row } from '../../../../globalComponents';
import ModalContent from './ModalContent';
import Modal from '../../../../components/Modal';
import CategoriesList from './CategoriesList';
import swal from 'sweetalert';
import Share from '../../../../components/Share';

export default function PersonCard({
  person,
  backgroundColor,
  children,
  isHelping,
}) {
  const [showModal, setShowModal] = useState(false);
  const [showContacts, setShowContacts] = useState(isHelping);
  const [necessity, setNecessity] = useState();

  let [necessities, setNecessities] = useState(person.necessities);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  function turnCategoryPending(category) {
    const index = necessities.findIndex((x) => x.category === category);
    necessities[index].status = 'pending';
    setNecessities([...necessities]);
    setShowContacts(true);
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
          style={{ backgroundColor: backgroundColor }}
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
          <ContactContainer style={!showContacts ? { opacity: 0 } : {}}>
            <ContactIcon
              onClick={() =>
                swal({
                  content: Share(),
                  buttons: {},
                })
              }
            >
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={
                  isHelping
                    ? 'ontouchstart' in window
                      ? `https://wa.me/${person.userPhone}?text=Olá,%20${
                          person.userName.split(' ')[0]
                        },%20vi%20pelo%20Fica%20em%20Casa%20que%20voc%C3%AA%pode%20me%20ajudar.`
                      : `https://web.whatsapp.com/send?phone=${
                          person.userPhone
                        }&text=Olá,%20${
                          person.userName.split(' ')[0]
                        },%20vi%20pelo%20Fica%20em%20Casa%20que%20voc%C3%AA%20pode%20me%20ajudar.`
                    : 'ontouchstart' in window
                    ? `https://wa.me/${person.userPhone}?text=Olá,%20${
                        person.userName.split(' ')[0]
                      },%20vi%20pelo%20Fica%20em%20Casa%20que%20voc%C3%AA%20precisa%20de%20ajuda.`
                    : `https://web.whatsapp.com/send?phone=${
                        person.userPhone
                      }&text=Olá,%20${
                        person.userName.split(' ')[0]
                      },%20vi%20pelo%20Fica%20em%20Casa%20que%20voc%C3%AA%20precisa%20de%20ajuda.`
                }
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
          </ContactContainer>
        </PeopleCard>
        <CollapsibleCard
          style={{ backgroundColor: backgroundColor, marginTop: '1px' }}
        >
          <p
            style={{
              fontSize: '1.7em',
              color: 'var(--color-grey-dark1)',
              fontWeight: '400',
              marginBottom: '5px',
            }}
          >
            {children}
          </p>
          <CategoriesList
            personName={person.userName}
            setNecessity={setNecessity}
            toggleShowModal={toggleShowModal}
            necessities={necessities}
            helperCategories={person.categoriesToHelp}
            setShowContacts={setShowContacts}
          ></CategoriesList>
          {/* {person.coordinates.latitude && userLocation && (
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
            )} */}
        </CollapsibleCard>
      </Column>
      {showModal && getModal()}
    </>
  );
}
