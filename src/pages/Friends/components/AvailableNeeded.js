import React from 'react';
import { Column } from '../../../globalComponents';

import peopleData from '../../../assets/peopleToHelp.json';
import PersonCard from './PersonCard';
import { MainPhrase, MainTab } from '../styledComponents';

export default function AvailableNeeded() {
  return (
    <MainTab>
      <MainPhrase>
        <strong style={{ fontSize: 'inherit' }}>
          {peopleData.length} vizinhos{' '}
        </strong>
        combinam com o que você pode
        <strong style={{ fontSize: 'inherit' }}> ajudar!</strong>
      </MainPhrase>
      <Column>
        {peopleData.map((person) => (
          <PersonCard person={person}>precisa de ajuda com:</PersonCard>
        ))}
      </Column>
    </MainTab>
  );
}
