import React from 'react';
import { TopDecorationImage, TopDecoration } from '../styledComponents';
import AvailableHelpers from '../components/AvailableHelpers';
import AvailableNeeded from '../components/AvailableNeeded';
import { useHistory } from 'react-router-dom';
import peopleData from '../../../assets/peopleToHelp.json';

export default function FriendsFirstAcess({ children }) {
  const history = useHistory();
  const isHelping = history.location.state === 'helper';
  return (
    <div style={{ position: 'relative' }}>
      <TopDecoration
        isHelping={isHelping}
        style={{ display: 'flex', alignItems: 'flex-end' }}
      >
        <TopDecorationImage isHelping={isHelping}></TopDecorationImage>
      </TopDecoration>
      <div style={{ zIndex: '10', position: 'absolute', width: '100%' }}>
        {isHelping && (
          <AvailableHelpers needyPeople={peopleData}></AvailableHelpers>
        )}
        {!isHelping && (
          <AvailableNeeded needyPeople={peopleData}></AvailableNeeded>
        )}
      </div>
      {children}
    </div>
  );
}
