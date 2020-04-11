import React from 'react';
import { TopDecorationImage, TopDecoration } from '../styledComponents';
import AvailableHelpers from '../components/AvailableHelpers';
import AvailableNeeded from '../components/AvailableNeeded';
import { useHistory } from 'react-router-dom';

export default function FriendsFirstAcess() {
  const history = useHistory();
  const isHelping = history.location.state;
  return (
    <div style={{ position: 'relative' }}>
      <TopDecoration
        isHelping={isHelping}
        style={{ display: 'flex', alignItems: 'flex-end' }}
      >
        <TopDecorationImage isHelping={isHelping}></TopDecorationImage>
      </TopDecoration>
      <div style={{ zIndex: '10', position: 'absolute', width: '100%' }}>
        {isHelping && <AvailableHelpers></AvailableHelpers>}
        {!isHelping && <AvailableNeeded></AvailableNeeded>}
      </div>
    </div>
  );
}
