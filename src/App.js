import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Menu></Menu>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
