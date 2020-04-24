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
  TextLink,
} from './styles';
import swal from 'sweetalert';
import InputMask from 'react-input-mask';
import Loader from '../../components/Loader';
import Loading from 'react-loading';
import { Row, Column } from '../../globalComponents';
import { sendCode, sendToken } from '../../services/phoneService';
import PhoneInput from '../../components/PhoneInput';

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
  const [alreadyHasCode, setAlreadyHasCode] = useState(false);

  const confirmCode = async () => {
    setIsLoading(true);
    if (!token && token.split(' ').join('').length != 6) {
      return swal('Insira um token válido, por favor', '', 'error');
    }
    if (isFormValid()) {
      sendCode(phone, email, hasNoEmail, token)
        .then((res) => {
          swal(
            'Tudo certo! Vamos continuar com o cadastro',
            '',
            'success',
          ).then((x) => {
            history.push('second-signup', {
              name,
              login: hasNoEmail ? phone : email,
              phone,
              useTermsRead,
            });
            setIsLoading(false);
          });
        })
        .catch((error) => {
          setIsLoading(false);
          swal(
            error.response
              ? error.response.data.error
              : 'Houve um erro na requisição',
            'Tente novamente!',
            'error',
          );
        });
    }
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

  const handleContinue = () => {
    if (!isFormValid()) {
      return;
    }
    if (alreadyHasCode) {
      return confirmCode();
    }
    swal(
      `Iremos enviar o código de confirmação para ${
        hasNoEmail ? 'número \n' + phone : 'email \n' + email
      }. Ok?`,
      hasNoEmail ? 'Esse envio será por sms, confira nas mensagens' : '',
      { buttons: ['Agora não', 'Sim'] },
    ).then((accepted) => {
      if (accepted) {
        swal({
          title: 'Aguarde enquanto enviamos o código...',
          content: Loader(),
          buttons: {},
        });
        sendConfirmationCode();
      }
    });
  };

  function isFormValid() {
    if (!name) {
      swal('Insira um nome, por favor', '', 'error');
      return false;
    }
    if (hasNoEmail) {
      if (!phone || phone.length < 5) {
        swal(
          'O telefone está em formato inválido',
          'Corrija por favor',
          'error',
        );
        return false;
      }
    } else {
      if (
        !email ||
        !email.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
      ) {
        swal('O email está em formato inválido', 'Corrija por favor', 'error');
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
              <Column>
                <PhoneInput setPhone={setPhone} phone={phone}></PhoneInput>
                <TextLink
                  onClick={() => {
                    setHasNoEmail(false);
                  }}
                >
                  usar email
                </TextLink>
              </Column>
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
                <Row style={{ justifyContent: 'space-around' }}>
                  <TextLink
                    onClick={() => {
                      setAlreadyHasCode(!alreadyHasCode);
                    }}
                  >
                    {alreadyHasCode
                      ? 'não tenho um código'
                      : 'já tenho um código'}
                  </TextLink>
                  <TextLink
                    onClick={() => {
                      swal(
                        'Deseja escolher o telefone como forma de fazer login?',
                        { buttons: ['Não, continuar com email', 'Sim'] },
                      ).then((change) => {
                        if (change) {
                          setHasNoEmail(true);
                        }
                      });
                    }}
                  >
                    não tenho email
                  </TextLink>
                </Row>
              </Column>
            )}
          </>
        )}
        {alreadyHasCode && (
          <InputMask
            mask='* * * * * *'
            value={token}
            onChange={(e) => setToken(e.target.value)}
          >
            {(inputProps) => (
              <LoginInput {...inputProps} placeholder='_ _ _ _ _ _' />
            )}
          </InputMask>
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
            <Column>
              <RegisterButton onClick={confirmCode}>confirmar</RegisterButton>
              <Row style={{ justifyContent: 'space-around', width: '100%' }}>
                <TextLink onClick={() => handleContinue()}>reenviar</TextLink>
                <TextLink onClick={() => setConfirmming(false)}>
                  alterar email
                </TextLink>
              </Row>
            </Column>
          )
        ) : (
          <RegisterButton onClick={handleContinue}>continuar</RegisterButton>
        )}

        <Row style={{ alignItems: 'flex-start' }}>
          <input
            onClick={() => setUseTermsRead(!useTermsRead)}
            checked={useTermsRead}
            type='checkbox'
            id='useTerms'
            style={{ width: '1.4em', height: '1.4em' }}
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
            <label style={{ fontSize: '.7em' }} htmlFor='useTerms'>
              Eu li e concordo com os{' '}
            </label>
            <Link
              style={{ fontSize: '.7em', display: 'inline-block' }}
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
