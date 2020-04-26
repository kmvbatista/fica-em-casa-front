import React, { useState } from 'react';
import { Row } from '../../globalComponents';
import DDISelect from '../DDISelect';
import { LoginInput } from '../../pages/FirstSignup/styles';

export default function PhoneInput({ phone, setPhone }) {
  const [ddi, setDDI] = useState('+55');
  const [phoneToShow, setPhoneToShow] = useState('');
  return (
    <Row>
      <DDISelect setDDI={setDDI} value={ddi}></DDISelect>
      <LoginInput
        value={phoneToShow}
        onBlur={(e) => {
          setPhoneToShow(e.target.value);
          setPhone(ddi + phoneToShow);
        }}
        onChange={(e) => {
          setPhoneToShow(e.target.value);
          setPhone(ddi + phoneToShow);
        }}
        placeholder='seu telefone'
        name='tel'
        id='tel'
        type='tel'
        required
      ></LoginInput>
    </Row>
  );
}
