import React, { useState } from 'react';
import { Column } from '../../../../globalComponents';
import { ProfileImage, ProfileContainer, Container } from './styles';
import Switch from '../../../../components/Switch';
import Loading from 'react-loading';
import swal from 'sweetalert';

export default function UserProfile(props) {
  const [isUserActive, setUserActive] = useState(props.isActive);
  const [isLoading, setIsLoading] = useState(false);

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
        <ProfileImage userPhoto={props.userPhoto}></ProfileImage>
        <Column style={{ justifyContent: 'space-around' }}>
          <strong style={{ fontSize: '3em', marginBottom: '.2em' }}>
            {props.userName.split(' ')[0]},
          </strong>
          <p style={{ fontSize: '1.8em' }}>você ainda está disponível?</p>
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
