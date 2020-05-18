import React from 'react';
import ReactDOM from 'react-dom';
import { Column } from '../../globalComponents';
import {
  Container,
  SecondContainer,
  WhatsContainer,
  SubTitle,
  Title,
} from './styles';

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
        </Container>
        <SecondContainer>
          <Title>Você está com algum sintoma da Covid-19?</Title>
          <SubTitle>
            O CovidBot te ajuda a monitorar seus sintomas de Covid-19 via
            Whatsapp.
          </SubTitle>
        </SecondContainer>
        <WhatsContainer>
          <strong>Realizar uma entrevista</strong>
          <img
            src='./whiteWhatsapp.svg'
            style={{ width: '2em', height: '2em' }}
            alt='Conversar com CovidBot'
          />
        </WhatsContainer>
      </Column>
    );
  }
}
