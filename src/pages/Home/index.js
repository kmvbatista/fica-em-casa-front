import React, { useState, useEffect } from 'react';
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
import * as SessionService from '../../services/sessionService';
import swal from 'sweetalert';
import { getPendingNecesseties } from '../../services/userService';
import { updateNecessitiesStatus } from '../../services/necessityService';
import PendingNecessities from '../../components/PendingNecessities';
import Loader from '../../components/Loader';

export default function ChooseGroup({ children }) {
  const history = useHistory();
  const dataFirstAcess = history.location.state;
  const [necessitiesToComplete, setNecessitiesToComplete] = useState([]);

  let [isUserLogged, setUserLogged] = useState(
    SessionService.getUserData() !== undefined,
  );

  useEffect(() => {
    if (!isUserLogged && !dataFirstAcess) {
      history.replace('/login');
    }
    getUserPendingNecessities();
  }, []);

  async function getUserPendingNecessities() {
    try {
      if (isUserLogged) {
        swal({
          title: 'Aguarde, por favor...',
          content: Loader(),
          buttons: {},
        });
        const userNecessities = await getPendingNecesseties();
        if (userNecessities && userNecessities.length > 0) {
          swal({
            title: 'Notamos que amigos tentaram ajudar...',
            content: PendingNecessities(
              userNecessities,
              necessitiesToComplete,
              setNecessitiesToComplete,
            ),
          }).then((x) => {
            swal({
              title: 'Aguarde por favor...',
              content: Loader(),
              buttons: {},
            });
            updateNecessitiesStatus(necessitiesToComplete, 'done');
          });
        } else {
          swal.close();
        }
      }
    } catch (error) {
      swal(
        error.response
          ? error.response.data.error
          : 'Não conseguimos buscar suas necessidades pendentes',
        'Tentaremos novamente depois',
        'error',
      );
    }
  }

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
    try {
      await SessionService.registerUser(dataToSend);
      history.push('can-help-options');
    } catch (error) {
      swal(
        `${
          error.response
            ? error.response.data.error
            : 'Tente novamente mais tarde!'
        }`,
        'Houve um erro na requisição',
        'error',
      );
    }
  }

  return (
    <Container
      style={{ position: 'relative', backgroundColor: 'var(--color-green)' }}
    >
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
              top: '50%',
              transform: 'translateY(-50%)',
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

            <div
              style={{
                position: 'absolute',
                left: '12%',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
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

            <div
              style={{
                position: 'absolute',
                left: '12%',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
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
      {children}
    </Container>
  );
}
