import React from 'react';
import { TabContainer, Tab } from './styles';
import AvailableHelpers from '../components/AvailableHelpers';
import AvailableNeeded from '../components/AvailableNeeded';
import { TopDecoration } from '../styledComponents';
import UserProfile from '../components/UserProfile';
import { getUserData } from '../../../services/sessionService';

export default function HelpBeHelped({ children }) {
  const [isHelping, setIsHelping] = React.useState(false);
  const [userLogged, setUserLogged] = React.useState(getUserData());

  const toggleIsHelping = () => {
    setIsHelping(!isHelping);
  };

  return (
    <div style={{ position: 'relative' }}>
      <TopDecoration
        isHelping={isHelping}
        style={{
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <UserProfile
          userName={userLogged.name}
          isHelping={isHelping}
        ></UserProfile>
        <TabContainer>
          <Tab
            isHelping={isHelping}
            highLight={isHelping}
            style={{ left: '0' }}
            onClick={toggleIsHelping}
          >
            <strong style={{ display: 'block', textAlign: 'center' }}>
              Precisa de ajuda
            </strong>
          </Tab>
          <Tab
            isHelping={isHelping}
            highLight={!isHelping}
            style={{ right: '0' }}
            onClick={toggleIsHelping}
          >
            <strong style={{ display: 'block', textAlign: 'center' }}>
              Quer te ajudar
            </strong>
          </Tab>
        </TabContainer>
      </TopDecoration>
      <div style={{ zIndex: '10', position: 'absolute', width: '100%' }}>
        {isHelping && <AvailableHelpers></AvailableHelpers>}
        {!isHelping && <AvailableNeeded></AvailableNeeded>}
      </div>
      {children}
    </div>
  );
}
