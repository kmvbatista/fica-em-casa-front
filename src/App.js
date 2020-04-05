import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import Appbar from './components/Appbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
