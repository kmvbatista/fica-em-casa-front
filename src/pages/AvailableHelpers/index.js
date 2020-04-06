import React from 'react';
import { TopDecoration, MainTab, MainPhrase } from './styles';

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
          <strong>X vizinhos</strong> combinam com o que você pode{' '}
          <strong>ajudar</strong>!
        </MainPhrase>
      </MainTab>
    </div>
  );
}
