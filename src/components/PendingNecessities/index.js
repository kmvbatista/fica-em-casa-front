import React from 'react';
import ReactDOM from 'react-dom';

import { Column } from '../CanHelpLoadingMatch/styles';

export default function PendingNecessities(
  necessities,
  listToSend,
  setListToSend,
) {
  const wrapper = document.createElement('div');
  function addItem(item) {
    listToSend.push(item);
    setListToSend([...listToSend]);
  }
  function removeItem(item) {
    const newList = listToSend.filter((x) => x !== item);
    setListToSend([...newList]);
  }

  function handleClick(item) {
    if (!listToSend.includes(item)) {
      addItem(item);
    } else {
      removeItem(item);
    }
  }
  ReactDOM.render(
    <Column
      style={{ color: 'black', alignItems: 'center', padding: '0 2em 2em 2em' }}
    >
      <strong style={{ marginBottom: '1em', display: 'inline-block' }}>
        Quais das seguintes ajudas deram tudo certo?
      </strong>
      {necessities.map((x) => (
        <div key={x.category}>
          <label style={{ marginRight: '2em' }} htmlFor={x.category}>
            {x.category}
          </label>{' '}
          <input
            onClick={() => handleClick(x.category)}
            id={x.category}
            name={x.category}
            type='checkbox'
          />
        </div>
      ))}
    </Column>,
    wrapper,
  );
  return wrapper.firstChild;
}
