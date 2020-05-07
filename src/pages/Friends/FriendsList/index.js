import React, { useContext } from 'react';
import { TabContainer, Tab } from './styles';
import AvailableHelpers from '../components/AvailableHelpers';
import AvailableNeeded from '../components/AvailableNeeded';
import { TopDecoration } from '../styledComponents';
import UserProfile from '../components/UserProfile';
import { useEffect } from 'react';
import * as SearchService from '../../../services/SearchService';
import api from '../../../services/api';
import LoadingMatch from '../../../components/NeedHelpLoadingMatch';
import { getUserLocation } from '../../../services/locationService';
import swal from 'sweetalert';
import Store from '../../../services/DefaultContext';
import Menu from '../../../components/Menu';
import { useHistory } from 'react-router-dom';

export default function HelpBeHelped() {
  const history = useHistory();
  const store = useContext(Store);
  debugger;
  const [isHelping, setIsHelping] = React.useState(
    history.location.state && history.location.state.isHelper,
  );
  const [needyPeople, setNeedyPeople] = React.useState(store.needyPeople || []);
  const [helpers, setHelpers] = React.useState(store.helpers || []);
  const [needyErrorMessage, setNeedyErrorMsg] = React.useState();
  const [helperErrorMessage, setHelperError] = React.useState();
  const [isNeedySearching, setNeedySearching] = React.useState(
    store.needyPeople === undefined,
  );
  const [isHelperSearching, setHelperSearching] = React.useState(
    store.helpers === undefined,
  );
  const [userLocation, setUserLocation] = React.useState({});

  const toggleIsHelping = () => {
    setIsHelping(!isHelping);
  };

  useEffect(() => {
    initiate();
  }, []);

  async function initiate() {
    const userLocation = await getLocation();
    if (store.helpers) {
      setHelperSearching(false);
    } else {
      getHelpers(userLocation);
    }
    if (store.needyPeople) {
      setNeedySearching(false);
    } else {
      getNeedy(userLocation);
    }
  }

  async function getLocation() {
    try {
      if (!store.location) {
        const coords = await getUserLocation();
        const newLocation = {
          latitude: coords.latitude,
          longitude: coords.longitude,
        };
        setUserLocation(newLocation);
        store.location = newLocation;
        return newLocation;
      } else {
        return store.location;
      }
    } catch (error) {
      setUserLocation(undefined);
      setHelperSearching(false);
      setNeedySearching(false);
      swal(
        'Não conseguimos buscar sua localização!',
        'Verifique se seu gps está ativado. Aí estão algumas dicas:',
        'error',
      );
    }
  }

  async function handleSwitch(isActive) {
    await api.put('/user', { active: isActive });
  }

  const getHelpers = async (location) => {
    const data = await SearchService.getNearHelpers(location);
    if (Array.isArray(data)) {
      setHelpers(data);
      store.helpers = data;
      setHelperSearching(false);
    } else {
      setHelperError(data);
      setHelperSearching(false);
    }
  };

  const getNeedy = async (location) => {
    const data = await SearchService.getNearNeedy(location);
    if (Array.isArray(data)) {
      setNeedyPeople(data);
      store.needyPeople = data;
      if (isNeedySearching) {
        setNeedySearching(false);
      }
    } else {
      setNeedyErrorMsg(data);
      setNeedySearching(false);
    }
  };

  return (
    <div>
      <TopDecoration
        isHelping={isHelping}
        style={{
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Menu
          customStyle={{
            backgroundColor: 'inherit',
            position: 'relative',
            width: '100%',
          }}
        ></Menu>
        <UserProfile
          handleSwitch={handleSwitch}
          isHelping={isHelping}
        ></UserProfile>
        <TabContainer>
          <Tab
            isLoading={isNeedySearching}
            isHelping={isHelping}
            highLight={!isHelping}
            style={{ right: '0' }}
            onClick={toggleIsHelping}
          >
            <strong style={{ display: 'block', textAlign: 'center' }}>
              Preciso de ajuda
            </strong>
          </Tab>
          <Tab
            isHelping={isHelping}
            isLoading={isNeedySearching}
            highLight={isHelping}
            style={{ left: '0' }}
            onClick={toggleIsHelping}
          >
            <strong style={{ display: 'block', textAlign: 'center' }}>
              Quero ajudar
            </strong>
          </Tab>
        </TabContainer>
      </TopDecoration>
      <div style={{ position: 'relative' }}>
        {isHelping ? getAvailableHelpers() : getAvailableNeeded()}
      </div>
      )}
    </div>
  );

  function getAvailableNeeded() {
    return (
      <>
        {isNeedySearching ? (
          <LoadingMatch></LoadingMatch>
        ) : (
          <AvailableNeeded
            errorMessage={needyErrorMessage}
            needyPeople={needyPeople}
            userLocation={userLocation}
          ></AvailableNeeded>
        )}
      </>
    );
  }

  function getAvailableHelpers() {
    return (
      <>
        {isHelperSearching ? (
          <LoadingMatch></LoadingMatch>
        ) : (
          <AvailableHelpers
            errorMessaged={helperErrorMessage}
            helpers={helpers}
            userLocation={userLocation}
          ></AvailableHelpers>
        )}
      </>
    );
  }
}
