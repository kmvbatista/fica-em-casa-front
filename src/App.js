import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import Menu from './components/Menu';
import api from './services/api';
import Store from './services/DefaultContext';
import { getIsUserLogged } from './services/sessionService';
import swal from 'sweetalert';

function App() {
  const storeConfig = {
    user: {
      name: undefined,
      nickName: undefined,
      photoUrl: undefined,
      isActive: undefined,
      phone: undefined,
    },
    nearFriends: {
      helpers: [],
      needyPeople: [],
    },
  };

  const [user, setUser] = useState(storeConfig.user);

  const storeHandler = {
    user: user,
    isUserLogged: getIfUserIsLogged(),
    refreshUserData: getUserData,
    setUser: setUser,
    helpers: storeConfig.helpers,
    needyPeople: storeConfig.needy,
    hasPendingNecessities: true,
    location: undefined,
    setName: (name) => {
      setUser(Object.assign(user, name));
    },
    setPhone: (phone) => {
      setUser(Object.assign(user, phone));
    },
    setIsActive: (isActive) => {
      setUser(Object.assign(user, isActive));
    },
  };

  function getIfUserIsLogged() {
    debugger;
    return getIsUserLogged();
  }

  async function getUserData() {
    try {
      const response = await api.get('/user');
      setUser(response.data);
    } catch (error) {
      swal(
        'Houve um erro na comunicação!',
        'Recarregue a página, ou refaça o login.',
        'error',
      );
    }
  }

  return (
    <>
      <Store.Provider value={storeHandler}>
        <BrowserRouter>
          <Routes
            isUserLogged={
              user.name || storeHandler.user.name || storeHandler.isUserLogged
            }
          >
            <Menu></Menu>
          </Routes>
        </BrowserRouter>
      </Store.Provider>
    </>
  );
}

export default App;
