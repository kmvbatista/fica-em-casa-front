import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Box1,
  Box2,
  Box3,
  CenteredBox,
  TitleContainer,
  SubTitle,
  Title,
  HighlightText,
  SecondaryText,
  Image,
} from './styles';
import api from '../../services/api';

export default function ChooseGroup() {
  const history = useHistory();
  const dataFirstAcess = history.location.state;

  let [isUserLogged, setUserLogged] = useState(false);

  useEffect(() => {
    // const cookies = document.cookie;
    // if (cookies) {
    //   try {
    //     const { token } = JSON.parse(cookies);
    //     if (token) {
    //       setUserLogged(true);
    //     }
    //   } catch (error) {}
    // } else if (!dataFirstAcess && !cookies) {
    //   history.replace('login');
    // }
  }, []);

  function helperChoice() {
    if (isUserLogged) {
      return history.push('/can-help-options');
    }
    registerHelper();
  }

  function needyChoice() {
    if (isUserLogged) {
      return history.push('/need-help-options');
    }
    history.push(
      'need-help-form',
      Object.assign(dataFirstAcess, { isNeedy: true }),
    );
  }

  function viewFriendsChoice() {
    history.push('friends');
  }

  async function registerHelper() {
    const dataToSend = Object.assign(dataFirstAcess, {
      isNeedy: false,
    });
    const response = await api.post('signup', dataToSend);
    const { user, token } = response.data;
    document.cookie = `token: ${JSON.stringify(token)}; user: ${JSON.stringify(
      user,
    )};`;
  }

  return (
    <Container>
      <Box1 onClick={needyChoice} isUserLogged={isUserLogged}>
        <TitleContainer>
          <Title>
            <strong>Faço parte do</strong> <br></br>
          </Title>
          <SubTitle>grupo de risco</SubTitle>
        </TitleContainer>
        <CenteredBox>
          <Image
            style={{ left: 0 }}
            src='./preciso-ajuda.png'
            alt='preciso-de-ajuda'
          ></Image>
          <div
            style={{
              direction: 'rtl',
              position: 'absolute',
              right: '20%',
              color: 'var(--color-pink)',
            }}
          >
            <HighlightText>
              <strong>Preciso</strong>
              <br></br>
            </HighlightText>
            <SecondaryText>de ajuda</SecondaryText>
          </div>
        </CenteredBox>
      </Box1>
      <Box2 onClick={helperChoice} isUserLogged={isUserLogged}>
        <TitleContainer>
          <Title>
            <strong>Não faço parte</strong>
            <br></br>
          </Title>
          <SubTitle>do grupo de risco</SubTitle>
        </TitleContainer>
        <CenteredBox>
          <div
            style={{
              direction: 'rtl',
              color: 'var(--color-purple)',
            }}
          >
            <Image
              style={{ right: 0, height: '105%', top: '10%' }}
              src='./quero-ajudar.png'
              alt='quero-ajudar'
            ></Image>

            <div style={{ position: 'absolute', left: '12%', top: '35%' }}>
              <HighlightText>
                <strong>Quero</strong>
                <br></br>
              </HighlightText>
              <SecondaryText>ajudar</SecondaryText>
            </div>
          </div>
        </CenteredBox>
      </Box2>
      <Box3 onClick={viewFriendsChoice} isUserLogged={isUserLogged}>
        <TitleContainer>
          <Title>
            <strong>Não faço parte</strong>
            <br></br>
          </Title>
          <SubTitle>do grupo de risco</SubTitle>
        </TitleContainer>
        <CenteredBox>
          <div
            style={{
              direction: 'rtl',
              color: 'var(--color-green)',
            }}
          >
            <Image
              style={{ right: 0, height: '105%', top: '10%' }}
              src='./amigos.png'
              alt='amigos'
            ></Image>

            <div style={{ position: 'absolute', left: '12%', top: '35%' }}>
              <SecondaryText>
                meus<br></br>
              </SecondaryText>
              <HighlightText>
                <strong>Amigos</strong>
              </HighlightText>
            </div>
          </div>
        </CenteredBox>
      </Box3>
    </Container>
  );
}
