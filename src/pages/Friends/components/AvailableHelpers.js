import React from 'react';
import PersonCard from './PersonCard';

import { MainPhrase, MainTab } from '../styledComponents';
import { Grid } from './PersonCard/styles';

export default function AvailableHelpers({ peopleData }) {
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
        <Grid>
          {peopleData.map((person) => (
            <PersonCard backgroundColor={'#ffffff1c'} person={person}>
              pode te ajudar com
            </PersonCard>
          ))}
        </Grid>
      </MainTab>
    </div>
  );
}
