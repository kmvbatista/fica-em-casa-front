import React, { useState, useContext, useEffect } from 'react';
import { Column } from '../../../../globalComponents';
import { ProfileImage, ProfileContainer, Container } from './styles';
import Switch from '../../../../components/Switch';
import Loading from 'react-loading';
import swal from 'sweetalert';
import Store from '../../../../services/DefaultContext';
import { getUserData } from '../../../../services/userService';

export default function UserProfile(props) {
  const store = useContext(Store);
  let userData = store.user;
  useEffect(() => {
    initiate();
  }, []);
  const [isUserActive, setUserActive] = useState(userData.isActive);
  const [isLoading, setIsLoading] = useState(userData.isActive == undefined);

  async function initiate() {
    try {
      if (!userData || !userData.name) {
        userData = {};
        userData = await getUserData();
        store.user = userData;
        setUserActive(userData.isActive);
        setIsLoading(false);
      }
    } catch (error) {}
  }

  async function handleToggle() {
    try {
      setIsLoading(true);
      await props.handleSwitch(!isUserActive);
      setUserActive(!isUserActive);
      setIsLoading(false);
    } catch (error) {
      swal(
        'Houve um erro ao atualizar seus dados!',
        'Tente novamente!',
        'error',
      );
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <ProfileContainer>
        <ProfileImage userPhoto={userData.photoUrl}></ProfileImage>
        <Column style={{ justifyContent: 'space-around' }}>
          <strong style={{ fontSize: '2.5em', marginBottom: '.2em' }}>
            {userData.name ? userData.name.split(' ')[0] : ''},
          </strong>
          <p style={{ fontSize: '1.8em' }}>você está disponível?</p>
        </Column>
        <div>
          {isLoading ? (
            <Loading
              color='white'
              type='spinningBubbles'
              width='3em'
              height='3em'
            ></Loading>
          ) : (
            <Switch
              isOn={isUserActive}
              onColor={'var(--color-green)'}
              handleToggle={handleToggle}
            ></Switch>
          )}
        </div>
      </ProfileContainer>
    </Container>
  );
}
