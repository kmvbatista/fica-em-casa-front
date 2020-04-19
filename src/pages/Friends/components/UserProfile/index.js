import React, { useState } from 'react';
import { Column } from '../../../../globalComponents';
import { ProfileImage, ProfileContainer, Container } from './styles';
import Switch from '../../../../components/Switch';

export default function UserProfile(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <ProfileContainer>
        <ProfileImage></ProfileImage>
        <Column style={{ justifyContent: 'space-around' }}>
          <strong style={{ fontSize: '3em', marginBottom: '.2em' }}>
            {props.userName.split(' ')[0]},
          </strong>
          <p style={{ fontSize: '1.8em' }}>
            {props.isHelping
              ? 'Você ainda precisa de ajuda?'
              : 'Você ainda pode ajudar?'}
          </p>
        </Column>
        <div>
          <Switch
            isOn={isActive}
            onColor={'var(--color-green)'}
            handleToggle={() => setIsActive(!isActive)}
          ></Switch>
        </div>
      </ProfileContainer>
    </Container>
  );
}
