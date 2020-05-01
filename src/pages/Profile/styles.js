import styled from 'styled-components';
import { Column } from '../../globalComponents';
import { RegisterButton } from '../FirstSignup/styles';

export const ProfileContainer = styled(Column)`
  position: relative;
  justify-content: flex-end;
  height: 100vh;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const ProfilePhotoContainer = styled.div`
  height: 35vh;
  background-color: var(--color-pink);
  position: absolute;
  top: 0;
  width: 100%;
  @media only screen and (min-width: 600px) {
    border-radius: 5px 0 0 5px;
    height: 100vh;
    left: 0;
    width: 40vw;
  }
`;

export const MainContainer = styled.div`
  background-color: var(--color-purple);
  border-radius: 20px 0 0 0;
  padding: 3em 3em 0 3em;
  height: calc(65% + 20px);
  transform: translate(0, 0);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media only screen and (min-width: 600px) {
    padding: 6em;

    width: calc(60% + 20px);
    border-radius: 20px 5px 5px 0;
    overflow: hidden;
    height: 100vh;
  }
`;

export const BottomContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 72%;
  left: 0;
  border-radius: 0 20px 0 0;
  position: absolute;
  bottom: 0;
  z-index: -1;
`;

export const PhotoContainer = styled(Column)`
  align-items: center;
  height: 35vh;
  justify-content: center;
  position: relative;
  @media only screen and (min-width: 600px) {
    margin-top: 50%;
    transform: translateY(-50%);
  }
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
  line-height: 2;
  &::placeholder {
    color: #f2f1f1b3;
    font-size: 0.7em;
    font-weight: 400;
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

export const PhotoInput = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
`;

export const Buttons = styled(Column)`
  width: 100%;
  justify-content: space-around;
  align-items: center;
  & > * {
    margin-bottom: 1em;
    width: 50%;
  }
  @media only screen and (min-width: 600px) {
    color: var(--color-purple);
    flex-direction: row;
    & > * {
      margin-bottom: 0;
    }
  }
`;
