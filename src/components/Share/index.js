import React from 'react';
import ReactDOM from 'react-dom';
import { Column } from '../../globalComponents';
import {
  MainContainer,
  ShareContainer,
  ShareIcons,
  ContinueButton,
  Text,
} from './styles';

export default function Share() {
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
        <MainContainer>
          <Text>
            <strong style={{ fontSize: '2em' }}>Gostou?</strong>
            <p>
              Compartilhe essa ideia nas redes sociais e quem sabe, com o apoio
              do Fica em casa, logo logo estaremos assim, todos juntos
              <br />
              <strong>até fisicamente.</strong>
            </p>
          </Text>
          <img
            style={{
              position: 'absolute',
              width: '1.5em',
              right: '10%',
              top: '35%',
            }}
            src='./white-decoration.png'
            alt='decoration'
          />
          <img
            style={{
              position: 'absolute',
              width: '1.2em',
              left: '1%',
              top: '40%',
            }}
            src='./yellow-heart.png'
            alt='decoration'
          />
          <img
            style={{
              position: 'absolute',
              width: '1em',
              right: '12%',
              top: '7px',
            }}
            src='./x-graphic-element.png'
            alt='decoration'
          />
          <img
            style={{
              position: 'absolute',
              width: '0.7em',
              left: '5%',
              top: '10%',
            }}
            src='./rounded-decoration.png'
            alt='decoration'
          />
          <img
            src='pessoas.png'
            style={{
              height: '60%',
              transform: 'translateY(5px)',
            }}
            alt='compartilhe'
          />
        </MainContainer>
        <ShareContainer>
          <ShareIcons></ShareIcons>
          <ContinueButton>Continuar ajudando</ContinueButton>
        </ShareContainer>
      </Column>
    );
  }
}
