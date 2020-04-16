import React from 'react';
import { Column } from '../../../globalComponents';

import PersonCard from './PersonCard';
import { MainPhrase, MainTab } from '../styledComponents';
import { SetCategoriesButton } from './UserProfile/styles';
import { useHistory } from 'react-router-dom';

export default function AvailableNeeded({ needyPeople, errorMessage }) {
  return (
    <MainTab>
      {errorMessage ? (
        ErrorMessage(errorMessage)
      ) : needyPeople.length == 0 ? (
        ErrorMessage(
          'Não há ninguém na sua região que você possa ajudar.\nAdote mais categorias para encontrar mais pessoas!',
        )
      ) : (
        <>
          <MainPhrase>
            <strong style={{ fontSize: 'inherit' }}>
              {needyPeople.length} vizinhos{' '}
            </strong>
            combinam com o que você pode
            <strong style={{ fontSize: 'inherit' }}> ajudar!</strong>
          </MainPhrase>
          <Column>
            {needyPeople.map((person) => (
              <PersonCard key={person.name} person={person}>
                precisa de ajuda com:
              </PersonCard>
            ))}
          </Column>
        </>
      )}
    </MainTab>
  );
}

const ErrorMessage = (errorMessage) => {
  const history = useHistory();
  return (
    <Column
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        padding: '10em 0',
      }}
    >
      {errorMessage.split('\n').map((x) => (
        <strong style={{ fontSize: '2.5em' }}>{x}</strong>
      ))}

      <SetCategoriesButton onClick={() => history.push('/can-help-options')}>
        Selecionar Categorias
      </SetCategoriesButton>
    </Column>
  );
};
