import React from 'react';
import { useHistory } from 'react-router-dom';
import { SetCategoriesButton } from './UserProfile/styles';
import { Column } from '../../../globalComponents';

export default function ErrorMessage({ errorMessage, isHelper }) {
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
      <SetCategoriesButton isHelper={isHelper} onClick={navigate}>
        Adicionar +Categorias
      </SetCategoriesButton>
    </Column>
  );
}
