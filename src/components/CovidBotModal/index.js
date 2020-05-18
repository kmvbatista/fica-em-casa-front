import React from 'react';
import ReactDOM from 'react-dom';
import { Column } from '../../globalComponents';
import {
  Container,
  SecondContainer,
  WhatsContainer,
  SubTitle,
  Title,
  CloseButton,
} from './styles';
import './styles.css';
import swal from 'sweetalert';

export default function CovidBotModal() {
  const wrapper = document.createElement('div');
  ReactDOM.render(getContainer(), wrapper);
  return wrapper.firstChild;

  function getContainer() {
    return (
      <Column
        style={{
          position: 'relative',
          height: '32em',
        }}
      >
        <Container>
          <img
            src='doctor.jpg'
            style={{
              height: '100%',
              transform: 'translateY(5px)',
            }}
            alt='compartilhe'
          />
          <CloseButton
            src='./cancel.svg'
            alt='apagar item'
            onClick={() => {
              swal.close();
            }}
          />
        </Container>
        <SecondContainer>
          <Title>Você está com algum sintoma da Covid-19?</Title>
          <SubTitle>
            O CovidBot te ajuda a monitorar seus sintomas de Covid-19 via
            Whatsapp.
          </SubTitle>
        </SecondContainer>
        <WhatsContainer>
          <strong style={{ fontSize: '1.3em' }}>Realizar uma entrevista</strong>
          <img
            src='./whiteWhatsapp.svg'
            style={{ marginLeft: '1em', width: '2em', height: '2em' }}
            alt='Conversar com CovidBot'
          />
        </WhatsContainer>
      </Column>
    );
  }
}
