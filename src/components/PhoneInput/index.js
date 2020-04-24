import React, { useState } from 'react';
import { Row } from '../../globalComponents';
import DDISelect from '../DDISelect';
import { LoginInput } from '../../pages/FirstSignup/styles';

export default function PhoneInput({ phone, setPhone }) {
  const [ddi, setDDI] = useState('+55');
  return (
    <Row>
      <DDISelect setDDI={setDDI} value={ddi}></DDISelect>
      <LoginInput
        value={phone}
        onChange={(e) => setPhone(ddi + e.target.value)}
        placeholder='seu telefone'
        name='tel'
        id='tel'
        type='tel'
        required
      ></LoginInput>
    </Row>
  );
}
