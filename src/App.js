import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import Menu from './components/Menu';
import api from './services/api';
import Store from './services/DefaultContext';
import swal from 'sweetalert';
import Loader from './components/Loader';

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
  };

  const [user, setUser] = useState(storeConfig.user);

  const storeHandler = {
    user: user,
    refreshUserData: getUserData,
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

  async function getUserData() {
    try {
      swal({
        title: 'Aguarde, por favor...',
        content: Loader(),
        buttons: {},
      });
      const response = await api.get('/user');
      swal.close();
      setUser(response.data);
    } catch (error) {
      swal(
        'Houve um erro na comunicação!',
        'Recarregue a página, por favor',
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
