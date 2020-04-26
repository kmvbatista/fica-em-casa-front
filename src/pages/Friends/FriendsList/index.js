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
import { getUserLocation } from '../../../services/locationService';
import swal from 'sweetalert';

export default function HelpBeHelped({ children }) {
  const [isHelping, setIsHelping] = React.useState(false);
  const userLogged = getUserData();
  const [needyPeople, setNeedyPeople] = React.useState([]);
  const [helpers, setHelpers] = React.useState([]);
  const [needyErrorMessage, setNeedyErrorMsg] = React.useState();
  const [helperErrorMessage, setHelperError] = React.useState();
  const [isNeedySearching, setNeedySearching] = React.useState(true);
  const [isHelperSearching, setHelperSearching] = React.useState(true);
  const [userLocation, setUserLocation] = React.useState();

  const toggleIsHelping = () => {
    setIsHelping(!isHelping);
  };

  useEffect(() => {
    getUsers();
  }, []);

  async function getLocation() {
    try {
      const coords = await getUserLocation();
      setUserLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
      return coords;
    } catch (error) {
      setUserLocation(undefined);
      await swal(
        'Não conseguimos buscar tua localização',
        'Por favor configure',
        'error',
      );
    }
  }

  async function getUsers() {
    const coords = await getLocation();
    if (coords) {
      getNeedy(coords);
      getHelpers(coords);
    } else {
      setHelperSearching(false);
      setNeedySearching(false);
    }
  }

  async function handleSwitch(isActive) {
    await api.put('/user', { active: isActive });
    userLogged.active = isActive;
    updateUserCookies(userLogged);
  }

  const getHelpers = async (coords) => {
    const data = await SearchService.getNearHelpers(coords);
    if (Array.isArray(data)) {
      setHelpers(data);
      setHelperSearching(false);
    } else {
      setHelperError(data);
      setHelperSearching(false);
    }
  };

  const getNeedy = async (coords) => {
    const data = await SearchService.getNearNeedy(coords);
    if (Array.isArray(data)) {
      setNeedyPeople(data);
      if (isNeedySearching) {
        setNeedySearching(false);
      }
    } else {
      setNeedyErrorMsg(data);
      setNeedySearching(false);
    }
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
      {getAvailableHelpers()}
      {getAvailableNeeded()}
      )}
      {children}
    </div>
  );

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
              userLocation={userLocation}
            ></AvailableNeeded>
          ))}
      </>
    );
  }

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
              userLocation={userLocation}
            ></AvailableHelpers>
          ))}
      </>
    );
  }
}
