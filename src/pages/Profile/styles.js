import styled from 'styled-components';
import { Column } from '../../globalComponents';
import { RegisterButton } from '../FirstSignup/styles';

export const ProfilePhotoContainer = styled.div`
  height: 35vh;
  background-color: var(--color-pink);
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 600px) {
    height: unset;
    width: 40%;
    border-radius: 5px 0 0 5px;
  }
`;

export const MainContainer = styled.div`
  background-color: var(--color-purple);
  border-radius: 20px 0 0 0;
  padding: 6em;
  height: 80vh;
  transform: translate(0, -2.1em);

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media only screen and (min-width: 600px) {
    transform: translate(-2.1em, 0);
    width: 70%;
    border-radius: 20px 5px 5px 0;
    overflow: hidden;
  }
`;

export const BottomContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 65%;
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
  line-height: 2;
  margin-top: 0.7em;
  &::placeholder {
    color: white;
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
