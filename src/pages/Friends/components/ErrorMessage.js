import React from 'react';
import { useHistory } from 'react-router-dom';
import { SetCategoriesButton } from './UserProfile/styles';
import { Column } from '../../../globalComponents';
import locationErrorMsg from '../../../assets/locationFailMessage.json';

export default function ErrorMessage({ errorMessage, isHelper, avoidButton }) {
  const history = useHistory();
  function navigate() {
    if (isHelper) {
      history.push('need-help-options');
    } else {
      history.push('can-help-options');
    }
  }
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
      {avoidButton && (
        <Column>
          <>
            <p> {locationErrorMsg.message}</p>
            <br />{' '}
            {locationErrorMsg.links.map((x) => (
              <a href={x.link}>{x.browser}</a>
            ))}
          </>
        </Column>
      )}
      {!avoidButton && (
        <SetCategoriesButton isHelper={isHelper} onClick={navigate}>
          Selecionar Categorias
        </SetCategoriesButton>
      )}
    </Column>
  );
}
