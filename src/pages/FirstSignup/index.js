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
import { sendToken } from '../../services/tokenService';
import PhoneInput from '../../components/PhoneInput';
import { isEmailValid } from '../../services/emailValidator';
import LoaderContainer from '../../components/LoaderContainer';

export default function Login() {
  const history = useHistory();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [hasNoEmail, setHasNoEmail] = useState(false);
  const [useTermsRead, setUseTermsRead] = useState(history.location.state);
  const [isLoading, setIsLoading] = useState(false);
  const [alreadySent, setAlreadySent] = useState(false);

  const handleContinue = () => {
    if (alreadySent) {
      swal(
        `Ok, iremos enviar novamente para ${
          hasNoEmail ? 'número \n' + phone : 'o email \n' + email
        }`,
        'Por favor, consulte se o link já chegou.',
        'info',
      );
    }
    if (!isFormValid()) {
      return;
    }
    swal(
      `Iremos enviar o código de confirmação para ${
        hasNoEmail ? 'número \n' + phone : 'o email \n' + email
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
        sendToken(phone, email, hasNoEmail).then((x) => {
          swal(
            'Código enviado com sucesso!',
            'Por favor, verifique seu email pra continuarmos com o cadastro',
            'success',
          );
          setAlreadySent(true);
        });
      }
    });
  };

  function isFormValid() {
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
      if (!email || !isEmailValid(email)) {
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
      <InitialForm style={{ justifyContent: 'space-around' }}>
        <Title>
          Insira seu email ou telefone para validarmos seu cadastro...
        </Title>
        {hasNoEmail ? (
          <Column>
            <PhoneInput setPhone={setPhone} phone={phone}></PhoneInput>
            <Row style={{ justifyContent: 'space-around', width: '100%' }}>
              <TextLink
                onClick={() => {
                  setHasNoEmail(false);
                }}
              >
                usar email
              </TextLink>
            </Row>
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
                  swal(
                    'Deseja escolher o telefone como forma de fazer login?',
                    { buttons: ['Continuar com email', 'Sim'] },
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
        <Column>
          <Row style={{ alignItems: 'center', marginBottom: '2em' }}>
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
              <label
                style={{ fontSize: '.8em', cursor: 'pointer' }}
                htmlFor='useTerms'
              >
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
          <LoaderContainer isLoading={isLoading}>
            <RegisterButton onClick={handleContinue}>
              {alreadySent ? 'reenviar' : 'enviar'}
            </RegisterButton>
          </LoaderContainer>
        </Column>
      </InitialForm>
    </Container>
  );
}
