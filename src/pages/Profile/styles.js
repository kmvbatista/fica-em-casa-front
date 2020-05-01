import styled from 'styled-components';
import { Column, Row } from '../../globalComponents';
import { RegisterButton } from '../FirstSignup/styles';

export const ProfilePhotoContainer = styled.div`
  height: 35vh;
  background-color: var(--color-pink);
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 600px) {
    width: 40%;
    border-radius: 5px 0 0 5px;
    height: 100vh;
  }
`;

export const MainContainer = styled.div`
  background-color: var(--color-purple);
  border-radius: 20px 0 0 0;
  padding: 3em 3em 0 3em;
  height: calc(65vh + 2.1em);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  bottom: 0;
  @media only screen and (min-width: 600px) {
    width: 65%;
    border-radius: 20px 0px 0px 0;
    overflow: hidden;
    height: 100vh;
    right: 0;
    padding: 6em;
  }
`;

export const BottomContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 73%;
  left: 0;
  border-radius: 0 20px 0 0;
  position: absolute;
  bottom: 0;
  z-index: -1;
`;

export const PhotoCard = styled.div`
  background-color: var(--color-grey-light1);
  border-radius: 20%;
  margin-bottom: 1em;
  height: 12em;
  width: 12em;
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 1px solid var(--color-purple-dark);
  color: white;
  font-size: 2.1em;
  width: 100%;
  margin-top: 0.7em;
  &::placeholder {
    color: #f2f1f1b3;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 1.5em;
  color: #f2f1f1b3;
`;

export const InputBlock = styled.div`
  margin-bottom: 1em;
`;

export const ProfileContainer = styled(Column)`
  position: relative;
  width: 100vw;
  height: 100vh;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`;
export const PhotoContainer = styled(Column)`
  align-items: center;
`;

export const SaveButton = styled(RegisterButton)`
  background-color: white;
  width: unset;
  border-radius: 20px;
  padding: 0.5em 1em;
  height: unset;
  box-shadow: unset;
  color: var(--color-pink);
  @media only screen and (min-width: 600px) {
    color: var(--color-purple);
  }
`;

export const ButtonsContainer = styled(Row)`
  justify-content: space-around;
  width: 100%;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    & > * {
      padding-bottom: 1em;
    }
  }
`;
