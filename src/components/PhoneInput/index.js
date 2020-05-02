import React, { useState } from 'react';
import { Row } from '../../globalComponents';
import DDISelect from '../DDISelect';
import { LoginInput } from '../../pages/FirstSignup/styles';

export default function PhoneInput({ setPhone, onEnter }) {
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
        onKeyPress={(e) => e.charCode === 13 && onEnter()}
        placeholder='seu telefone com DDD'
        name='tel'
        id='tel'
        type='number'
        required
      ></LoginInput>
    </Row>
  );
}
