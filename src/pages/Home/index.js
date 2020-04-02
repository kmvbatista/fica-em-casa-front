import React from 'react';
import { Container } from '@material-ui/core';
import TabPanel from '../../components/TabPanel';
import './styles.css';

export default function Home() {
  return (
    <div>
      <Container className='container'>
        <TabPanel></TabPanel>
      </Container>
    </div>
  );
}
