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
  ShareLink,
} from './styles';
import swal from 'sweetalert';

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
              do Fica em Casa, logo logo estaremos assim, todos juntos
              <br />
              <strong>até fisicamente.</strong>
            </p>
          </Text>
          <img
            style={{
              position: 'absolute',
              width: '1em',
              height: '1em',
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
              height: '1.2em',
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
              height: '2em',
              right: '12%',
              top: '7px',
            }}
            src='./white-decoration.png'
            alt='decoration'
          />
          <img
            style={{
              position: 'absolute',
              height: '0.7em',
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
            <ShareLink
              target='_blank'
              href='https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fficaemcasaapp.com.br%2F&amp;src=sdkpreparse'
              class='fb-xfbml-parse-ignore'
            >
              <IconContainer>
                <img
                  src='./facebook.svg'
                  style={{ height: '2.7em', width: '2.7em' }}
                  alt='Compartilhe no Facebok'
                />
                Facebook
              </IconContainer>
            </ShareLink>
            <ShareLink
              target='_blank'
              href='https://web.whatsapp.com/send?text=Oi%2C%20conhece%20algu%C3%A9m%20que%20precisa%20de%20ajuda%20ou%20pode%20ajudar%20nessa%20quarentena%3F%20Olha%20esse%20app%20que%20legal%3A%0Dficaemcasaapp.com.br'
              data-action='share/whatsapp/share'
            >
              <IconContainer>
                <img
                  src='./shareWhatsapp.svg'
                  style={{ height: '2.7em', width: '2.7em' }}
                  alt='Compartilhe no Whatsapp'
                />
                Whatsapp
              </IconContainer>
            </ShareLink>
            <ShareLink
              target='_blank'
              href='https://www.instagram.com/ficaemcasaapp/'
              data-action='share/instagram/share'
            >
              <IconContainer>
                <img
                  src='./instagram.svg'
                  style={{ height: '2.7em', width: '2.7em' }}
                  alt='Compartilhe no Instagram'
                />
                Instagram
              </IconContainer>
            </ShareLink>
          </ShareIcons>
          <ContinueButton onClick={() => swal.close()}>
            Continuar ajudando
          </ContinueButton>
        </ShareContainer>
      </Column>
    );
  }
}
