import React from 'react';
import PersonCard from './PersonCard';

import { MainPhrase, MainTab } from '../styledComponents';
import { Grid } from './PersonCard/styles';
import ErrorMessage from './ErrorMessage';
import LocationErrorMessage from './LocationErrorMessage';

export default function AvailableHelpers({
  helpers,
  errorMessage,
  userLocation,
}) {
  return (
    <MainTab style={{ backgroundColor: 'var(--color-purple)' }}>
      {!userLocation ? (
        <LocationErrorMessage
          buttonsColor={'var(--color-pink)'}
        ></LocationErrorMessage>
      ) : errorMessage ? (
        <ErrorMessage
          errorMessage={errorMessage}
          isHelper={true}
        ></ErrorMessage>
      ) : helpers.length === 0 ? (
        <ErrorMessage
          isHelper={true}
          errorMessage={
            'Poxa, parece que ainda não há \npessoas ajudando nessas categorias!'
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
                userLocation={userLocation}
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
