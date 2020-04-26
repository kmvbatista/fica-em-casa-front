import React from 'react';
import locationErrorMessage from '../../../assets/locationFailMessage.json';
import PersonCard from './PersonCard';
import { MainPhrase, MainTab } from '../styledComponents';
import { Grid } from './PersonCard/styles';
import ErrorMessage from './ErrorMessage';
import LocationErrorMessage from './LocationErrorMessage';

export default function AvailableNeeded({
  needyPeople,
  errorMessage,
  userLocation,
}) {
  return (
    <MainTab>
      {!userLocation ? (
        <LocationErrorMessage
          buttonsColor={'var(--color-purple)'}
        ></LocationErrorMessage>
      ) : errorMessage ? (
        <ErrorMessage
          errorMessage={errorMessage}
          isHelper={false}
        ></ErrorMessage>
      ) : needyPeople.length === 0 ? (
        <ErrorMessage
          isHelper={false}
          errorMessage={
            'Poxa, parece que ainda não há \npessoas precisando de ajuda nessas categorias!'
          }
        ></ErrorMessage>
      ) : (
        <>
          <MainPhrase>
            <strong style={{ fontSize: 'inherit' }}>
              {needyPeople.length} vizinho(s){' '}
            </strong>
            combinam com o que você pode
            <strong style={{ fontSize: 'inherit' }}> ajudar!</strong>
          </MainPhrase>
          <Grid>
            {needyPeople.map((person) => (
              <PersonCard
                userLocation={userLocation}
                key={person.userName}
                person={person}
              >
                precisa de ajuda com:
              </PersonCard>
            ))}
          </Grid>
        </>
      )}
    </MainTab>
  );
}
