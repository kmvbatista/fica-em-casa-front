import React, { useState } from 'react';
import {
  ProfilePhotoContainer,
  MainContainer,
  PhotoCard,
  Input,
  BottomContainer,
  Label,
  InputBlock,
  PhotoContainer,
  ProfileContainer,
  SaveButton,
} from './styles';
import Dropdown from '../../components/PopUpMenu';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { updateUserCookies, getUserData } from '../../services/sessionService';
import * as UserService from '../../services/userService';
import swal from 'sweetalert';
import Loading from 'react-loading';
import { Row } from '../../globalComponents';
import Loader from '../../components/Loader';
import ProfilePhoneInput from '../../components/ProfilePhoneInput';
import ButtonWithLoading from '../../components/ButtonWithLoading';
import UpdatePassord from '../../components/UpdatePassord';

export default function Profile() {
  const userData = getUserData();
  const [phone, setPhone] = useState(userData.phone);
  const [nickname, setNickname] = useState(userData.nickname || '');
  const [name, setName] = useState(userData.name);
  const [photo, setPhoto] = useState(userData.photoUrl);
  const [isEditted, setIsEditted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  async function handleSave() {
    setIsLoading(true);
    try {
      await api.put('/user', { name, phone, nickname });
      updateUserCookies({ name, phone, nickname });
      setIsEditted(false);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      swal('Houve um erro na sua requisição', 'Tente novamente!', 'error');
    }
  }

  async function postPhoto(file) {
    if (!file) {
      return;
    }
    const data = new FormData();
    data.append('file', file);
    try {
      swal({
        title: 'Aguarde enquanto salvamos sua foto...',
        content: Loader(),
        buttons: {},
      });
      const response = await api.post('/files', data);
      userData.photoUrl = response.data.photoUrl;
      setPhoto(userData.photoUrl);
      updateUserCookies(userData);
      swal('Foto salva com sucesso', '', 'success');
    } catch (error) {
      swal(
        `${
          error.response
            ? error.response.data.error
            : 'Houve um erro enquanto tentávamos salvar sua foto!'
        }`,
        'Tente novamente.',
        'error',
      );
    }
  }

  async function deleteAccount() {
    try {
      const accepted = await swal({
        title: 'Tens certeza que quer exluir tua conta?',
        text: 'Essa ação é irreversível',
        icon: 'warning',
        buttons: ['Não', 'Sim'],
        dangerMode: true,
      });
      if (accepted) {
        await UserService.deleteAccount();
        history.replace('login');
      } else {
        swal('Agradecemos por continuar com a gente :)', '', 'success');
      }
    } catch (error) {
      if (error.response || error.message) {
        return swal(
          'Houve um erro na sua requisição',
          'Tente novamente',
          'error',
        );
      }
    }
  }

  async function handleUpdatePassword() {
    swal({
      content: UpdatePassord(),
      buttons: {},
    });
  }

  function Menu() {
    return (
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <img
          src='./back.svg'
          onClick={() => history.goBack()}
          style={{ width: '5em', padding: '1em' }}
          alt='Voltar'
        />
        {isEditted ? (
          <SaveButton onClick={() => handleSave()}>
            {isLoading ? (
              <Loading
                type='spinningBubbles'
                color={'var(--color-pink)'}
                width={'2em'}
                height={'2em'}
              ></Loading>
            ) : (
              'Salvar'
            )}
          </SaveButton>
        ) : (
          <Dropdown></Dropdown>
        )}
      </div>
    );
  }

  function handleEditting() {
    if (!isEditted) {
      setIsEditted(true);
    }
  }

  return (
    <ProfileContainer>
      <ProfilePhotoContainer>
        <PhotoContainer style={{ position: 'relative' }}>
          <input
            style={{
              opacity: 0,
              width: '100%',
              height: '100%',
              cursor: 'pointer',
              position: 'absolute',
            }}
            type='file'
            onChange={(event) => {
              postPhoto(event.target.files[0]);
            }}
          />
          <PhotoCard
            style={{
              backgroundImage: `url(${photo || './user.svg'})`,
              backgroundSize: 'cover',
              border: '1px solid white',
            }}
          ></PhotoCard>
          <strong style={{ fontSize: '2em' }}>Alterar foto</strong>
        </PhotoContainer>
      </ProfilePhotoContainer>
      <MainContainer>
        <InputBlock>
          <Label style={{ color: 'var(--color-purple-dark)' }}>apelido</Label>
          <Row>
            <Input
              value={nickname}
              onChange={(e) => {
                handleEditting();
                setNickname(e.target.value);
              }}
              style={{
                fontSize: '3em',
                fontFamily: 'BalooThambi2-Bolder',
                marginTop: '.2em',
                lineHeight: '1.8',
              }}
            ></Input>
            <img src='./pencil.svg' style={{ width: '2em' }} alt='seu nome' />
          </Row>
        </InputBlock>
        <InputBlock>
          <Label>seu nome</Label>
          <Row>
            <Input
              value={name}
              onChange={(e) => {
                handleEditting();
                setName(e.target.value);
              }}
            ></Input>
            <img src='./user.svg' style={{ width: '2em' }} alt='seu nome' />
          </Row>
        </InputBlock>
        <InputBlock>
          <Label>seu telefone</Label>
          <Row>
            <ProfilePhoneInput
              phone={phone}
              setPhone={setPhone}
            ></ProfilePhoneInput>
            <img
              src='./iphone.svg'
              style={{ width: '2em' }}
              alt='seu telefone'
            />
          </Row>
        </InputBlock>
        <Row style={{ justifyContent: 'space-around', width: '100%' }}>
          <ButtonWithLoading
            onClick={deleteAccount}
            style={{
              border: '1px solid white',
              width: '80%',
              boxShadow: '0px 15px 10px rgba(0,0,0, 0.1)',
            }}
          >
            Excluir minha conta
          </ButtonWithLoading>
          <ButtonWithLoading
            onClick={handleUpdatePassword}
            style={{
              border: '1px solid white',
              width: '80%',
              backgroundColor: 'var(--color-green)',
              boxShadow: '0px 15px 10px rgba(0,0,0, 0.1)',
            }}
          >
            Alterar senha
          </ButtonWithLoading>
        </Row>
        <BottomContainer></BottomContainer>
      </MainContainer>
      <Menu></Menu>
    </ProfileContainer>
  );
}
