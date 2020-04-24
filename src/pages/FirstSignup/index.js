import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

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
import { Row, Column } from '../../globalComponents';
import { sendCode, sendToken } from '../../services/phoneService';

export default function Login() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [isConfirmming, setConfirmming] = useState(false);
  const [hasNoEmail, setHasNoEmail] = useState(false);
  const [useTermsRead, setUseTermsRead] = useState(history.location.state);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    if (isFormValid()) {
      sendCode(phone, email, hasNoEmail, token)
        .then((res) => {
          swal(
            'Tudo certo! Vamos continuar com o cadastro',
            '',
            'success',
          ).then((x) => {
            history.push('second-signup', { name, phone });
            setIsLoading(false);
          });
        })
        .catch((error) => {
          setIsLoading(false);
          swal(error.response.data.error, 'Tente novamente!', 'error');
        });
    }
  };

  function isFormValid() {
    if (!name) {
      swal('Insira um nome, por favor', '', 'error');
      return false;
    }
    if (hasNoEmail) {
      if (!phone || phone.length < 5) {
        swal('Telefone está em formato inválido', 'Corrija por favor', 'error');
        return false;
      }
    }

    if (!useTermsRead) {
      swal(
        'Você deve primeiro ler e aceitar os termos de uso.',
        'Tente novamente',
        'error',
      );
      return false;
    }
    return true;
  }

  const handleContinue = () => {
    debugger;
    if (!isFormValid()) {
      return;
    }
    swal(
      `${
        name.split(' ')[0]
      }, vamos enviar um código de confirmação para o número \n${phone}!`,
      'Será por sms, ok?!',
    ).then((x) => {
      swal({
        title: 'Aguarde enquanto enviamos o código...',
        content: Loader(),
        buttons: {},
      });
      sendConfirmationCode();
    });
  };

  function sendConfirmationCode() {
    sendToken(phone, email, hasNoEmail)
      .then((_) => {
        setConfirmming(true);
        swal(
          'Código enviado com sucesso!!!',
          'Por favor, insira-o abaixo!',
          'success',
        );
      })
      .catch((error) => {
        swal(
          `${
            error.response
              ? error.response.data.error
              : 'Tente novamente, por favor'
          }`,
          'Houve erro ao tentar enviar o código',
          'error',
        );
      });
  }

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
            mask='* * * * * *'
            value={token}
            onChange={(e) => setToken(e.target.value)}
          >
            {(inputProps) => (
              <LoginInput {...inputProps} placeholder='_ _ _ _ _ _' />
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
            {hasNoEmail ? (
              <InputMask
                mask='(99) 99999-9999'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              >
                {(inputProps) => (
                  <LoginInput
                    {...inputProps}
                    placeholder='seu telefone'
                    name='tel'
                    id='tel'
                    type='tel'
                    required
                  ></LoginInput>
                )}
              </InputMask>
            ) : (
              <Column>
                <LoginInput
                  placeholder='seu email'
                  name='email'
                  id='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></LoginInput>
                <p
                  style={{
                    textDecoration: 'underline',
                    textAlign: 'center',
                    cursor: 'pointer',
                    color: 'var(--color-purple-dark)',
                    marginTop: '1em',
                    fontSize: '1.4em',
                  }}
                  onClick={() => {
                    swal('Ok, então insira o seu telefone, por favor!', '', '');
                    setHasNoEmail(true);
                  }}
                >
                  não tenho email
                </p>
              </Column>
            )}
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

        <Row style={{ alignItems: 'flex-start' }}>
          <input
            onClick={() => setUseTermsRead(!useTermsRead)}
            checked={useTermsRead}
            type='checkbox'
            style={{ width: '2em', height: '2em' }}
          />
          <p
            style={{
              color: 'var(--color-purple)',
              fontSize: '2em',
              display: 'inline-block',
              marginLeft: '1em',
            }}
          >
            {' '}
            Eu li e concordo com os{' '}
            <Link
              style={{ fontSize: '1em', display: 'inline-block' }}
              to='/use-terms'
            >
              Termos de uso
            </Link>
            .
          </p>
        </Row>
      </InitialForm>
    </Container>
  );
}
