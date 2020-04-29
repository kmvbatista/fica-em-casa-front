import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import Menu from './components/Menu';
import api from './services/api';
import Store from './services/DefaultContext';
import swal from 'sweetalert';
import * as SearchService from './services/SearchService';

function App() {
  const storeConfig = {
    user: {
      name: undefined,
      nickName: undefined,
      location: undefined,
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
    refreshUserData: getUserData,
    setUser: setUser,
    helpers: storeConfig.helpers,
    needyPeople: storeConfig.needy,
    setName: (name) => {
      setUser(Object.assign(user, name));
    },
    setPhone: (phone) => {
      setUser(Object.assign(user, phone));
    },
    setLocation: (location) => {
      setUser(Object.assign(user, location));
    },
    setIsActive: (isActive) => {
      setUser(Object.assign(user, isActive));
    },
  };

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
          <Routes>
            <Menu></Menu>
          </Routes>
        </BrowserRouter>
      </Store.Provider>
    </>
  );
}

export default App;
