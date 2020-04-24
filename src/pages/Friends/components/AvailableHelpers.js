import React from 'react';
import PersonCard from './PersonCard';

import { MainPhrase, MainTab } from '../styledComponents';
import { Grid } from './PersonCard/styles';
import ErrorMessage from './ErrorMessage';

export default function AvailableHelpers({ helpers, errorMessage }) {
  return (
    <MainTab style={{ backgroundColor: 'var(--color-purple)' }}>
      {errorMessage ? (
        <ErrorMessage
          errorMessage={errorMessage}
          isHelper={true}
        ></ErrorMessage>
      ) : helpers.length === 0 ? (
        <ErrorMessage
          isHelper={true}
          errorMessage={
            'Não há ninguém na sua região que pode te ajudar.\n Cadastre mais necessidades para encontrar mais pessoas!'
          }
        ></ErrorMessage>
      ) : (
        <>
          <MainPhrase>
            <strong style={{ fontSize: 'inherit' }}>
              {helpers.length} vizinho(s){' '}
            </strong>
            combinam com o que você precisa e
            <strong style={{ fontSize: 'inherit' }}> vão te ajudar</strong>!
          </MainPhrase>
          <Grid>
            {helpers.map((person) => (
              <PersonCard
                backgroundColor={'#ffffff1c'}
                person={person}
                key={person.name}
              >
                pode te ajudar com
              </PersonCard>
            ))}
          </Grid>
        </>
      )}
    </MainTab>
  );
}
