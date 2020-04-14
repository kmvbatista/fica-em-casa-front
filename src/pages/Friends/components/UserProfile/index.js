import React, { useState } from 'react';
import { Row, Column } from '../../../../globalComponents';
import { ProfileImage, ProfileContainer, Container } from './styles';
import Switch from '../../../../components/Switch';

export default function UserProfile(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <ProfileContainer>
        <ProfileImage></ProfileImage>
        <Column style={{ justifyContent: 'space-around' }}>
          <strong style={{ fontSize: '3em' }}>Carlos</strong>
          <p style={{ fontSize: '1.5em' }}>Você ainda quer ajudar?</p>
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
