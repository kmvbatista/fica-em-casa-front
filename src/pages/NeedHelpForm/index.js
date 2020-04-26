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
import swal from 'sweetalert';
import { Row } from '../../globalComponents';
import { updateUser } from '../../services/userService';
import LoaderContainer from '../../components/LoaderContainer';

export default function NeedHelpForm() {
  const history = useHistory();
  const [hasChildren, setHasChildren] = useState();
  const [dayOfBirth, setDayOfBirth] = useState('');
  const [monthOfBirth, setMonthOfBirth] = useState('');
  const [yearOfBirth, setYearOfBirth] = useState('');
  const [sonsAtHome, setSonsAtHome] = useState(0);
  const [sonsQuantity, setSonsQuantity] = useState(1);
  const [sonsAverageAge, setSonsAverageAge] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const birthday = `${dayOfBirth}/${monthOfBirth}/${yearOfBirth}`;
      const dataToSend = {
        birthday,
        sonsAtHome: Number.parseInt(sonsAtHome),
        sonsQuantity: Number.parseInt(sonsQuantity),
        sonsAverageAge: Number.parseInt(sonsAverageAge),
      };
      await updateUser(dataToSend);
      setIsLoading(false);
      await swal(
        'Dados salvos com sucesso!',
        'Cadastre agora suas necessidades.',
        'success',
      );
      history.replace('need-help-options');
    } catch (error) {
      setIsLoading(false);
      swal(
        error.response
          ? error.response.data.error
          : 'Houve um erro na sua requisição',
        '',
        'error',
      );
    }
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
                    placeholder='ex: 10'
                  />
                </InputBox>
                <InputBox>
                  <Input
                    value={monthOfBirth}
                    onChange={(e) => setMonthOfBirth(e.target.value)}
                    type='number'
                    placeholder='12'
                  />
                </InputBox>
                <InputBox>
                  <Input
                    value={yearOfBirth}
                    onChange={(e) => setYearOfBirth(e.target.value)}
                    type='number'
                    placeholder='87'
                  />
                </InputBox>
              </div>
            </InputBlock>
          </div>
          <InputBlock>
            <Question>Você tem filhos?</Question>
            <Row>
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
            </Row>
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
        <LoaderContainer isLoading={isLoading}>
          <RegisterUserButton onClick={handleSubmit}>
            confirmar
          </RegisterUserButton>
        </LoaderContainer>
      </FormContainer>
    </MainContainer>
  );
}
