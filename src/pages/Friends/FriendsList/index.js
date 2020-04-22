import React from 'react';
import { TabContainer, Tab } from './styles';
import AvailableHelpers from '../components/AvailableHelpers';
import AvailableNeeded from '../components/AvailableNeeded';
import { TopDecoration } from '../styledComponents';
import UserProfile from '../components/UserProfile';
import {
  getUserData,
  updateUserCookies,
} from '../../../services/sessionService';
import { useEffect } from 'react';
import * as SearchService from '../../../services/SearchService';
import api from '../../../services/api';

export default function HelpBeHelped({ children }) {
  const [isHelping, setIsHelping] = React.useState(false);
  const userLogged = getUserData();
  const [needyPeople, setNeedyPeople] = React.useState([]);
  const [helpers, setHelpers] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState();
  const [helperErrorMessage, setHelperError] = React.useState();

  const toggleIsHelping = () => {
    setIsHelping(!isHelping);
  };

  useEffect(() => {
    getHelpers();
    getNeedy();
  }, []);

  async function handleSwitch(isActive) {
    await api.put('/user', { active: isActive });
    userLogged.active = isActive;
    updateUserCookies(userLogged);
  }

  const getHelpers = async () => {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const data = await SearchService.getNearHelpers(coords);
      console.log(data);
      if (Array.isArray(data)) {
        setHelpers(data);
      } else {
        setHelperError(data);
      }
    });
  };

  const getNeedy = async () => {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const data = await SearchService.getNearNeedy(coords);
      console.log(data);
      if (Array.isArray(data)) {
        setNeedyPeople(data);
      } else {
        setErrorMessage(data);
      }
    });
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
          handleSwitch={handleSwitch}
          isActive={userLogged.active}
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
        {isHelping && (
          <AvailableHelpers
            errorMessaged={helperErrorMessage}
            helpers={helpers}
          ></AvailableHelpers>
        )}
        {!isHelping && (
          <AvailableNeeded
            errorMessage={errorMessage}
            needyPeople={needyPeople}
          ></AvailableNeeded>
        )}
      </div>
      {children}
    </div>
  );
}
