import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import Menu from './components/Menu';
import api from './services/api';
import Store from './services/DefaultContext';

function App() {
  const storeConfig = {
    user: {
      name: undefined,
      location: undefined,
      photoUrl: undefined,
      isActive: undefined,
      phone: undefined,
    },
    token: undefined,
  };

  const [user, setUser] = useState(storeConfig.user);
  const [token, setToken] = useState(storeConfig.token);

  const storeHandler = {
    token: token,
    user: user,
    setToken: setToken,
    setUser: setUser,
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

  return (
    <>
      <Store.Provider value={storeHandler}>
        <BrowserRouter>
          <Routes haveUserData={storeHandler.name != undefined}>
            <Menu></Menu>
          </Routes>
        </BrowserRouter>
      </Store.Provider>
    </>
  );
}

export default App;
