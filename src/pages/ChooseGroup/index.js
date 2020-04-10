import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Box1,
  Box2,
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
  const dataComing = history.location.state;

  const handleSubmit = async () => {
    const dataToSend = Object.assign(dataComing, { isNeeded: false });
    console.log(dataToSend);
    const response = await api.post('signup', dataToSend);
    const { user, token } = response.data;
    document.cookie = `token: ${JSON.stringify(token)}; user: ${JSON.stringify(
      user,
    )};`;
    history.push('/help');
  };

  return (
    <Container>
      <Box1
        onClick={() =>
          history.push(
            'need-help-form',
            Object.assign(dataComing, { isNeeded: true }),
          )
        }
      >
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
      <Box2 onClick={handleSubmit}>
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
    </Container>
  );
}
