import React, { useState } from 'react';
import { Row } from '../../globalComponents';
import { Input } from '../../pages/Profile/styles';
import Ddi from './Ddi';

export default function ProfilePhoneInput({ phone, setPhone }) {
  const [ddi, setDDI] = useState(phone.slice(0, 3));
  const [phoneToShow, setPhoneToShow] = useState(phone.slice(3));
  return (
    <Row style={{ width: '100%' }}>
      <Ddi setDDI={setDDI} value={ddi}></Ddi>
      <Input
        value={phoneToShow}
        onChange={(e) => {
          setPhoneToShow(e.target.value);
          setPhone(ddi + phoneToShow);
        }}
        placeholder='seu telefone'
        name='tel'
        id='tel'
        type='tel'
        required
      ></Input>
    </Row>
  );
}
