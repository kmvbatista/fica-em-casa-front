import React from 'react';
import ReactDOM from 'react-dom';
import { Column } from '../../globalComponents';
import {
  MainContainer,
  ShareContainer,
  ShareIcons,
  ContinueButton,
  Text,
  IconContainer,
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
              width: '1em',
              right: '10%',
              top: '35%',
              transform: 'rotate(75deg)',
            }}
            src='./x-graphic-element.png'
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
              width: '2em',
              right: '12%',
              top: '7px',
            }}
            src='./white-decoration.png'
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
          <ShareIcons>
            <a
              target='_blank'
              href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fficaemcasaapp.com.br%2F&amp;src=sdkpreparse'
              class='fb-xfbml-parse-ignore'
            >
              <IconContainer>
                <img
                  src='./facebook.svg'
                  style={{ width: '1em' }}
                  alt='compartilhe no face'
                />
                <strong>Whatsapp</strong>
              </IconContainer>
            </a>
            <a
              href='https://web.whatsapp.com/send?text=Pessoal,%20se%20liga%20nesse%20app:%20https://ficaemcasaapp.com.br`'
              data-action='share/whatsapp/share'
            >
              <IconContainer>
                <img
                  src='./shareWhatsapp.svg'
                  style={{ width: '1em' }}
                  alt='compartilhe no whats'
                />
                <strong>Whatsapp</strong>
              </IconContainer>
            </a>
            <a
              href='https://web.whatsapp.com/send?text=Pessoal,%20se%20liga%20nesse%20app:%20https://ficaemcasaapp.com.br`'
              data-action='share/whatsapp/share'
            >
              <IconContainer>
                <img
                  src='./instagram.svg'
                  style={{ width: '1em' }}
                  alt='compartilhe no whats'
                />
                <strong>Instagram</strong>
              </IconContainer>
            </a>
          </ShareIcons>
          <ContinueButton>Continuar ajudando</ContinueButton>
        </ShareContainer>
      </Column>
    );
  }
}
