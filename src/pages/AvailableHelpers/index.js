import React, { useState, useEffect } from 'react';
import { TopDecoration, MainTab, MainPhrase } from './styles';
import { Column } from '../../globalComponents';

import peopleData from '../../assets/peopleToHelp.json';
import PersonCard from './PersonCard';

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
