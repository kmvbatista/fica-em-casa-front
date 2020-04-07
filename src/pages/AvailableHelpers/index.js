import React, { useState } from 'react';
import {
  TopDecoration,
  MainTab,
  MainPhrase,
  PeopleCard,
  PersonAvatar,
  Distance,
  PersonName,
  ContactIcon,
  CollapsibleCard,
  HelpOptionCard,
  GoToMapsButtonn,
} from './styles';
import { Column, Row } from '../../globalComponents';
import Collapse from '@material-ui/core/Collapse';
import ArrowButton from './ArrowButton/arrowButton';
import peopleData from '../../assets/peopleToHelp.json';

export default function AvailableHelpers() {
  const [isActive, setIsActive] = useState(false);
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
          <strong style={{ fontSize: 'inherit' }}>
            {peopleData.length} vizinhos
          </strong>{' '}
          combinam com o que você pode{' '}
          <strong style={{ fontSize: 'inherit' }}>ajudar</strong>!
        </MainPhrase>
        <Column>
          {peopleData.map((person) => (
            <Column style={{ marginBottom: '2em' }}>
              <PeopleCard key={person.distance}>
                <PersonAvatar
                  style={{
                    backgroundImage: `url(${person.photoUrl})`,
                  }}
                ></PersonAvatar>
                <Column style={{ marginRight: '5%' }}>
                  <PersonName>
                    <strong style={{ fontSize: 'inherit' }}>
                      {person.name}
                    </strong>
                  </PersonName>
                  <Distance>{person.distance}km perto de você</Distance>
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
                    <img
                      src='./phone.svg'
                      alt='whatsapp icon'
                      style={{
                        width: '70%',
                        borderRadius: 'inherit',
                      }}
                    />
                  </ContactIcon>
                  <div onClick={() => setIsActive(!isActive)}>
                    <ArrowButton></ArrowButton>
                  </div>
                </Row>
              </PeopleCard>
              <Collapse in={isActive}>
                <CollapsibleCard>
                  <p
                    style={{
                      fontSize: '1.4em',
                      color: 'var(--color-grey-dark1)',
                      fontWeight: '200',
                    }}
                  >
                    {person.name.split(' ')[0]} precisa de ajuda com
                  </p>
                  <Row style={{ margin: '.8em 0' }}>
                    {person.needHelpWith.map((it) => (
                      <HelpOptionCard>
                        <img
                          src={`./${it}.png`}
                          alt={it}
                          style={{ width: '1.5em', height: '1.5em' }}
                        />
                      </HelpOptionCard>
                    ))}
                  </Row>
                  <GoToMapsButtonn>
                    <strong>Traçar mapa usando o Google Maps</strong>
                  </GoToMapsButtonn>
                </CollapsibleCard>
              </Collapse>
            </Column>
          ))}
        </Column>
      </MainTab>
    </div>
  );
}
