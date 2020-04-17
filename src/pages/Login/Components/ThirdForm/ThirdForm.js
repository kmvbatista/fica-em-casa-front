import React from 'react';
import './styles.css';
import {
  Container,
  InputBlock,
  LoginInput,
  RegisterButton,
  Title,
} from './styles';
import LoaderContainer from '../../../../components/LoaderContainer';

export default function ThirdForm(props) {
  return (
    <div className='container'>
      <Container>
        <Title>
          <strong style={{ fontSize: 'inherit' }}>Faça o seu login</strong>
        </Title>

        <InputBlock className='input-block'>
          <LoginInput
            placeholder='Seu telefone'
            name='phone'
            id='phone'
            required
            value={props.phone}
            onChange={(e) => props.setPhone(e.target.value)}
          ></LoginInput>
          <LoginInput
            placeholder='Sua senha'
            name='password'
            type='password'
            required
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
          ></LoginInput>
          <LoaderContainer
            color={'var(--color-pink)'}
            isLoading={props.isLoading}
          >
            <RegisterButton
              onClick={() => {
                props.handleSubmit();
              }}
            >
              Acessar
            </RegisterButton>
          </LoaderContainer>
        </InputBlock>
      </Container>
    </div>
  );
}
