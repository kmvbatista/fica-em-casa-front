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
import LoadingMatch from '../../../components/NeedHelpLoadingMatch';

export default function HelpBeHelped({ children }) {
  const [isHelping, setIsHelping] = React.useState(false);
  const userLogged = getUserData();
  const [needyPeople, setNeedyPeople] = React.useState([]);
  const [helpers, setHelpers] = React.useState([]);
  const [needyErrorMessage, setNeedyErrorMsg] = React.useState();
  const [helperErrorMessage, setHelperError] = React.useState();
  const [isNeedySearching, setNeedySearching] = React.useState(true);
  const [isHelperSearching, setHelperSearching] = React.useState(true);

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
        setHelperSearching(false);
      } else {
        setHelperError(data);
        setHelperSearching(false);
      }
    });
  };

  const getNeedy = async () => {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const data = await SearchService.getNearNeedy(coords);
      console.log(data);
      if (Array.isArray(data)) {
        setNeedyPeople(data);
        if (isNeedySearching) {
          setNeedySearching(false);
        }
      } else {
        setNeedyErrorMsg(data);
        setNeedySearching(false);
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
          userPhoto={userLogged.photoUrl}
          isHelping={isHelping}
        ></UserProfile>
        <TabContainer>
          <Tab
            isHelping={isHelping}
            isLoading={isNeedySearching}
            highLight={isHelping}
            style={{ left: '0' }}
            onClick={toggleIsHelping}
          >
            <strong style={{ display: 'block', textAlign: 'center' }}>
              Precisa de ajuda
            </strong>
          </Tab>
          <Tab
            isLoading={isNeedySearching}
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
        {getAvailableHelpers()}
        {getAvailableNeeded()}
      </div>
      )}
      {children}
    </div>
  );

  function getAvailableHelpers() {
    return (
      <>
        {isHelping &&
          (isHelperSearching ? (
            <LoadingMatch></LoadingMatch>
          ) : (
            <AvailableHelpers
              errorMessaged={helperErrorMessage}
              helpers={helpers}
            ></AvailableHelpers>
          ))}
      </>
    );
  }

  function getAvailableNeeded() {
    return (
      <>
        {!isHelping &&
          (isNeedySearching ? (
            <LoadingMatch></LoadingMatch>
          ) : (
            <AvailableNeeded
              errorMessage={needyErrorMessage}
              needyPeople={needyPeople}
            ></AvailableNeeded>
          ))}
      </>
    );
  }
}
