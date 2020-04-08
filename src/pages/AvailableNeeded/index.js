import React from 'react';
import { Column } from '../../globalComponents';

import peopleData from '../../assets/peopleToHelp.json';
import PersonCard from '../../components/AvailablePeople/PersonCard';
import {
  MainPhrase,
  TopDecoration,
  MainTab,
} from '../../components/AvailablePeople/sharedComponents';

export default function AvailableNeeded() {
  return (
    <div>
      {/* <TopDecoration>
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
      </TopDecoration> */}
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
            <PersonCard person={person}></PersonCard>
          ))}
        </Column>
      </MainTab>
    </div>
  );
}
