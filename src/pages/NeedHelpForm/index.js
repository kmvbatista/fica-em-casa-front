import React, { useState } from 'react';
import {
  Title,
  InputBlock,
  Input,
  RadioButton,
  Question,
  Select,
  InputBox,
  RegisterUserButton,
  FormContainer,
  MainContainer,
} from './styles';
import { useHistory } from 'react-router-dom';
import { ColumnContainer } from '../../optionsComponents';
import * as SessionService from '../../services/sessionService';
import { Column } from '../../globalComponents';

export default function NeedHelpForm() {
  const history = useHistory();
  const [hasChildren, setHasChildren] = useState();
  const [dayOfBirth, setDayOfBirth] = useState('');
  const [monthOfBirth, setMonthOfBirth] = useState('');
  const [yearOfBirth, setYearOfBirth] = useState('');
  const [sonsAtHome, setSonsAtHome] = useState(0);
  const [sonsQuantity, setSonsQuantity] = useState(1);
  const [sonsAverageAge, setSonsAverageAge] = useState(10);
  const dataComing = history.location.state;

  const handleSubmit = async () => {
    const birthday = `${dayOfBirth}/${monthOfBirth}/${yearOfBirth}`;
    const dataToSend = Object.assign(dataComing, {
      birthday,
      sonsAtHome: Number.parseInt(sonsAtHome),
      sonsQuantity: Number.parseInt(sonsQuantity),
      sonsAverageAge: Number.parseInt(sonsAverageAge),
    });
    await SessionService.registerUser(dataToSend);
  };

  return (
    <MainContainer>
      <FormContainer>
        <div>
          <Title>Se você faz parte do grupo de risco, preencha abaixo</Title>
          <div>
            <InputBlock
              style={{ flexDirection: 'column', alignItems: 'flex-start' }}
            >
              <Question style={{ width: '100%' }}>Quando você nasceu?</Question>
              <div style={{ display: 'flex', marginTop: '1.2em' }}>
                <InputBox>
                  <Input
                    value={dayOfBirth}
                    onChange={(e) => setDayOfBirth(e.target.value)}
                    type='number'
                  />
                </InputBox>
                <InputBox>
                  <Input
                    value={monthOfBirth}
                    onChange={(e) => setMonthOfBirth(e.target.value)}
                    type='number'
                  />
                </InputBox>
                <InputBox>
                  <Input
                    value={yearOfBirth}
                    onChange={(e) => setYearOfBirth(e.target.value)}
                    type='number'
                  />
                </InputBox>
              </div>
            </InputBlock>
          </div>
          <InputBlock>
            <Question>Você tem filhos?</Question>
            <RadioButton
              onClick={() => setHasChildren(true)}
              className='radio'
              style={{
                backgroundColor: hasChildren ? '#ffff0099' : 'transparent',
              }}
            >
              sim
            </RadioButton>
            <RadioButton
              onClick={() => {
                setHasChildren(false);
              }}
              style={{
                backgroundColor:
                  hasChildren === false ? '#ffff00b3' : 'transparent',
              }}
              className='radio'
            >
              não
            </RadioButton>
          </InputBlock>
          <div
            style={{
              transition: 'opacity .8s',
              opacity: !hasChildren ? 0 : 1,
            }}
          >
            <InputBlock>
              <Question>Quantos?</Question>
              <InputBox>
                <Input
                  type='number'
                  value={sonsQuantity}
                  onChange={(e) => setSonsQuantity(e.target.value)}
                />
              </InputBox>
            </InputBlock>
            <InputBlock>
              <Question>Faixa Etária?</Question>
              <Select
                name='childrenAge'
                id='childrenAge'
                onChange={(e) => setSonsAverageAge(e.target.value)}
              >
                <option value={10}>até 10 anos</option>
                <option value={20}>até 20 anos</option>
                <option value={30}>até 30 anos</option>
                <option value={40}>até 40 anos</option>
              </Select>
            </InputBlock>
            <InputBlock>
              <Question>Quantos moram com você?</Question>
              <InputBox>
                <Input
                  value={sonsAtHome}
                  onChange={(e) => setSonsAtHome(e.target.value)}
                  type='number'
                />
              </InputBox>
            </InputBlock>
          </div>
        </div>
        <RegisterUserButton onClick={handleSubmit}>
          confirmar
        </RegisterUserButton>
      </FormContainer>
    </MainContainer>
  );
}
