import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Subtitle,
  Title,
  Welcome,
  InitialForm,
  LoginInput,
  RegisterButton,
} from './styles';
import swal from 'sweetalert';
import InputMask from 'react-input-mask';
import Loader from '../../components/Loader';
import Loading from 'react-loading';
import { Row } from '../../globalComponents';

export default function Login() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [isConfirmming, setConfirmming] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async () => {
    setIsLoading(true);
  };
  const handleContinue = async () => {
    swal(
      `${
        name.split(' ')[0]
      }, vamos enviar um código de confirmação para o número ${phone}!`,
      'Será por sms, ok?!',
    ).then((x) => {
      setConfirmming(true);
      swal({
        title: 'Aguarde enquanto enviamos o código...',
        content: Loader(),
        buttons: {},
      });
      setTimeout(() => {
        swal(
          'Código enviado com sucesso!!!',
          'Por favor, insira-o abaixo!',
          'success',
        );
      }, 2000);
    });
  };

  return (
    <Container>
      <Welcome>
        <Title style={{ color: 'var(--color-white)' }}>Oi, tudo bem?</Title>
        <Subtitle>
          Sabemos que não muito, né :(<br></br>Mas esse app foi feito justamente
          para nos ajudarmos nesse momento tão complicado
        </Subtitle>
      </Welcome>
      <InitialForm>
        {isConfirmming ? (
          <Title>Insira o código enviado por favor..</Title>
        ) : (
          <Title>Faça o seu cadastro para continuar...</Title>
        )}
        {isConfirmming ? (
          <InputMask
            mask='9 9 9 9'
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value)}
          >
            {(inputProps) => (
              <LoginInput {...inputProps} placeholder='_ _ _ _' />
            )}
          </InputMask>
        ) : (
          <>
            <LoginInput
              placeholder='seu nome'
              name='name'
              id='name'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></LoginInput>
            <LoginInput
              onChange={(e) => setPhone(e.target.value)}
              placeholder='seu telefone'
              name='tel'
              id='tel'
              type='tel'
              value={phone}
              required
            ></LoginInput>
          </>
        )}
        {isConfirmming ? (
          isLoading ? (
            <Row style={{ justifyContent: 'center' }}>
              <Loading
                type='spinningBubbles'
                color='var(--color-pink)'
                width='6em'
                height='6em'
              ></Loading>
            </Row>
          ) : (
            <RegisterButton onClick={handleSubmit}>
              Confirmar número
            </RegisterButton>
          )
        ) : (
          <RegisterButton onClick={handleContinue}>continuar</RegisterButton>
        )}
      </InitialForm>
    </Container>
  );
}
