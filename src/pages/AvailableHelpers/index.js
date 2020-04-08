import React from 'react';
import { Column } from '../../globalComponents';

import peopleData from '../../assets/peopleToHelp.json';
import PersonCard from '../../components/AvailablePeople/PersonCard';
import {
  MainPhrase,
  TopDecoration,
  MainTab,
} from '../../components/AvailablePeople/sharedComponents';

export default function AvailableHelpers() {
  return (
    <div>
      <TopDecoration style={{ backgroundColor: 'var(--color-pink)' }}>
        <img
          src='./helpers.png'
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
      <MainTab style={{ backgroundColor: 'var(--color-purple)' }}>
        <MainPhrase>
          <strong style={{ fontSize: 'inherit' }}>
            {peopleData.length} vizinhos
          </strong>
          combinam com o que você precisa e
          <strong style={{ fontSize: 'inherit' }}>vão te ajudar</strong>!
        </MainPhrase>
        <Column>
          {peopleData.map((person) => (
            <PersonCard
              backgroundColor={'#ffffff1c'}
              person={person}
            ></PersonCard>
          ))}
        </Column>
      </MainTab>
    </div>
  );
}
