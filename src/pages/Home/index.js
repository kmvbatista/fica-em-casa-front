import React, { useEffect, useState } from 'react';
import { Container, Button } from '@material-ui/core';
import TabPanel from '../../components/TabPanel';
import './styles.css';
import api from '../../services/api';
import NecessityForm from '../../components/NecessityForm';

export default function Home() {
  const [necessities, setNecessities] = useState([]);
  useEffect(() => {
    api.get('/user').then(el => {
      console.log(el);
      setNecessities(el.data.necessities);
    });
  }, []);

  const handleSave = async () => {
    await api.patch('/user/5e855e133c79bb2a6bb12cce', necessities);
  };

  return (
    <div>
      <Container className='container'>
        <TabPanel>
          <NecessityForm
            necessities={necessities}
            setNecessities={setNecessities}
          ></NecessityForm>
        </TabPanel>
        <Button onClick={() => handleSave()}>Salvar</Button>
      </Container>
    </div>
  );
}
