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

import { Column, Row } from '../../../globalComponents';

import Collapse from '@material-ui/core/Collapse';
import ArrowButton from './ArrowButton/arrowButton';

export default function PersonCard({ person }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Column style={{ marginBottom: '2em' }}>
      <PeopleCard
        key={person.distance}
        style={!isExpanded ? { borderRadius: '10px' } : {}}
      >
        <PersonAvatar
          style={{
            backgroundImage: `url(${person.photoUrl})`,
          }}
        ></PersonAvatar>
        <Column style={{ marginRight: '5%' }}>
          <PersonName>
            <strong style={{ fontSize: 'inherit' }}>{person.name}</strong>
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
          <div onClick={() => setIsExpanded(!isExpanded)}>
            <ArrowButton></ArrowButton>
          </div>
        </Row>
      </PeopleCard>
      <Collapse in={isExpanded}>
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
            <GoToMapsIcon src='./location.svg'></GoToMapsIcon>
            <strong>Traçar mapa usando o Google Maps</strong>
          </GoToMapsButtonn>
        </CollapsibleCard>
      </Collapse>
    </Column>
  );
}
