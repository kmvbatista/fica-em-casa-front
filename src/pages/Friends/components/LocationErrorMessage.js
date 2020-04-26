import React from 'react';
import locationErrorMsg from '../../../assets/locationFailMessage.json';
import { Column } from '../../../globalComponents';
import { RegisterButton } from '../../FirstSignup/styles';

export default function LocationErrorMessage({ buttonsColor }) {
  return (
    <Column
      style={{ alignItems: 'flex-start', margin: '5% auto', padding: '0 4em' }}
    >
      <>
        {locationErrorMsg.message.split('\n').map((x) => (
          <p style={{ fontSize: '2em', marginBottom: '1.3em' }}>{x}</p>
        ))}
        <br />{' '}
        {locationErrorMsg.links.map((x) => (
          <a
            rel='noopener noreferrer'
            target='_blank'
            href={x.link}
            style={{ margin: '0 auto 1em auto' }}
          >
            <RegisterButton
              style={{
                backgroundColor: buttonsColor,
                padding: '1em',
                height: 'unset',
                fontSize: '.9em',
                width: '20em',
                boxShadow: '0px 15px 10px rgba(0,0,0, 0.1)',
              }}
            >
              {x.browser}
            </RegisterButton>
          </a>
        ))}
      </>
    </Column>
  );
}
