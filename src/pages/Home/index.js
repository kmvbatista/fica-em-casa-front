import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import TabPanel from '../../components/TabPanel';
import './styles.css';
import api from '../../services/api';

export default function Home() {
  const [necessities, setNecessities] = useState([]);
  useEffect(async () => {
    const response = await api.get('/search');
    console.log(response);
    setNecessities(response.data);
  }, []);
  return (
    <div>
      <Container className='container'>
        <TabPanel></TabPanel>
      </Container>
    </div>
  );
}
