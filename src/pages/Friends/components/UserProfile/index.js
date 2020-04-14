import React, { useState } from 'react';
import { Row, Column } from '../../../../globalComponents';
import { ProfileImage, ProfileContainer } from './styles';
import Switch from '../../../../components/Switch';

export default function UserProfile(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <ProfileContainer>
      <ProfileImage></ProfileImage>
      <Column style={{ justifyContent: 'space-around' }}>
        <strong style={{ fontSize: '4em' }}>Carlos</strong>
        <p style={{ fontSize: '2em' }}>Você ainda quer ajudar?</p>
      </Column>
      <div>
        <Switch
          isOn={isActive}
          onColor={'var(--color-green)'}
          handleToggle={() => setIsActive(!isActive)}
        ></Switch>
      </div>
    </ProfileContainer>
  );
}
