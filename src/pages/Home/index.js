import React, { useState, useEffect, useContext } from 'react';
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
import swal from 'sweetalert';
import { getPendingNecesseties } from '../../services/userService';
import { updateNecessitiesStatus } from '../../services/necessityService';
import PendingNecessities from '../../components/PendingNecessities';
import Loader from '../../components/Loader';
import Store from '../../services/DefaultContext';
import { getUserLocation } from '../../services/locationService';

export default function ChooseGroup({ children }) {
  const history = useHistory();
  const dataComming =
    history.location.state && history.location.state.userJustRegistered;
  const [necessitiesToComplete, setNecessitiesToComplete] = useState([]);
  const [userJustRegistered, setUserJustRegistered] = useState(dataComming);

  const store = useContext(Store);

  useEffect(() => {
    getUserPendingNecessities();
  }, []);

  async function getUserPendingNecessities() {
    try {
      if (!userJustRegistered && store.hasPendingNecessities) {
        swal({
          title: 'Aguarde, por favor...',
          content: Loader(),
          buttons: {},
        });
        const userNecessities = await getPendingNecesseties();
        store.hasPendingNecessities = false;
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
    setUserJustRegistered(false);
    return history.push('/can-help-options');
  }

  function needyChoice() {
    if (userJustRegistered) {
      setUserJustRegistered(false);
      return history.push('need-help-form');
    }
    return history.push('/need-help-options');
  }

  function viewFriendsChoice() {
    history.push('friends');
  }

  return (
    <Container
      style={
        ({ position: 'relative' },
        userJustRegistered
          ? { backgroundColor: 'var(--color-purple)' }
          : { backgroundColor: 'var(--color-green)' })
      }
    >
      <Box1 onClick={needyChoice} userJustRegistered={userJustRegistered}>
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

      <Box2 onClick={helperChoice} userJustRegistered={userJustRegistered}>
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
      {!userJustRegistered && (
        <Box3 onClick={viewFriendsChoice}>
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
      )}

      {userJustRegistered || children}
    </Container>
  );
}
