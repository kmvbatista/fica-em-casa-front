import React from 'react';
import { Column } from '../../../globalComponents';

import peopleData from '../../../assets/peopleToHelp.json';
import PersonCard from './PersonCard';

import { MainPhrase, MainTab } from '../HelpOrGetHelp/styles';

export default function AvailableHelpers() {
  return (
    <div>
      <MainTab style={{ backgroundColor: 'var(--color-purple)' }}>
        <MainPhrase>
          <strong style={{ fontSize: 'inherit' }}>
            {peopleData.length} vizinhos{' '}
          </strong>
          combinam com o que você precisa e
          <strong style={{ fontSize: 'inherit' }}> vão te ajudar</strong>!
        </MainPhrase>
        <Column>
          {peopleData.map((person) => (
            <PersonCard backgroundColor={'#ffffff1c'} person={person}>
              pode te ajudar com
            </PersonCard>
          ))}
        </Column>
      </MainTab>
    </div>
  );
}
