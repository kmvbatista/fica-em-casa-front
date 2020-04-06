import React from 'react';
import {
  TopDecoration,
  MainTab,
  MainPhrase,
  PeopleCard,
  PersonAvatar,
  Distance,
  PersonName,
  ContactIcon,
} from './styles';
import peopleData from '../../assets/peopleToHelp.json';
import { Column, Row } from '../../globalComponents';

export default function AvailableHelpers() {
  return (
    <div>
      <TopDecoration>
        <img
          src='./old-guys-dancing.png'
          alt='needed-people'
          style={{
            position: 'absolute',
            top: '0em',
            height: '180%',
            left: '50%',
            transform: 'translate(-50%, 0)',
          }}
        />
      </TopDecoration>
      <MainTab>
        <MainPhrase>
          <strong>X vizinhos</strong> combinam com o que você pode{' '}
          <strong>ajudar</strong>!
        </MainPhrase>
        <Column>
          {peopleData.map((el) => (
            <PeopleCard key={el.distance}>
              <PersonAvatar>
                <img
                  src={el.photoUrl}
                  alt={el.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                  }}
                />
              </PersonAvatar>
              <Column>
                <PersonName>{el.name}</PersonName>
                <Distance>{el.distance}km perto de você</Distance>
              </Column>
              <Row>
                <ContactIcon>
                  <img
                    src='./whatsapp.png'
                    alt='whatsapp icon'
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 'inherit',
                    }}
                  />
                </ContactIcon>
                <ContactIcon>
                  <img
                    src='./telefone.png'
                    alt='whatsapp icon'
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 'inherit',
                    }}
                  />
                </ContactIcon>
              </Row>
            </PeopleCard>
          ))}
        </Column>
      </MainTab>
    </div>
  );
}
