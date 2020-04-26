import React from 'react';
import { ArrowContainer, Arrow } from './styles';

export default function ArrowButton({ isExpanded }) {
  return (
    <>
      <ArrowContainer style={{ cursor: 'pointer' }}>
        <Arrow
          style={isExpanded ? { transform: 'rotate(180deg)' } : {}}
          src='./down-arrow.svg'
        ></Arrow>
      </ArrowContainer>
    </>
  );
}
