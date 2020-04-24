import styled from 'styled-components';
import { RegisterButton } from '../FirstSignup/styles';
import { Column } from '../../globalComponents';
import { ColumnContainer } from '../../optionsComponents';

export const Title = styled.div`
  color: white;
  font-size: 2.3em;
  font-weight: bolder;
  margin-bottom: 1.5em;
`;

export const InputBlock = styled.div`
  margin-bottom: 2em;
  display: flex;
  font-size: 1.7em;
  color: white;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1;
  display: block;
  border: none;
  min-width: 0;
  background-color: inherit;
  outline: none;
  color: white;
  font-size: 1.5em;
  text-align: center;
  font-weight: 200;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;

export const InputBox = styled.div`
  border: white 2px solid;
  border-radius: 10px;
  background-color: transparent;
  width: 4em;
  height: 4em;
  margin-right: 1em;
  display: flex;
  position: relative;
`;

export const RadioButton = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-block;
  border: white 2px solid;
  border-radius: 10px;
  width: 3.5em;
  height: 3.5em;
  margin-right: 1em;
  text-align: center;
  padding: 0.975em 0;
  font-weight: bolder;
`;

export const Question = styled.div`
  width: 40%;
  margin-right: 10%;
  font-size: 1.1em;
`;

export const Select = styled.select`
  border: white 2px solid;
  border-radius: 10px;
  background-color: var(--color-pink);
  color: white;
  font-size: 1em;
  height: 3em;
  margin-right: 1em;
  width: 8em;
`;

export const GetModalButton = styled.div`
  cursor: pointer;
  display: block;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
`;

export const RegisterUserButton = styled(RegisterButton)`
  background-color: var(--color-pink);
  border: 2px solid white;
  &:hover {
    background-color: var(--color-green);
  }
  width: 100%;
  box-shadow: 0px 25px 20px rgba(0, 0, 0, 0.3);
  &:active {
    transform: scale(0.9);
    box-shadow: 0px 40px 30px rgba(0, 0, 0, 0.3);
  }
`;

export const FormContainer = styled(Column)`
  justify-content: space-between;
  position: relative;
  height: 95vh;
  justify-content: space-between;
  @media only screen and (min-width: 600px) {
    width: 80%;
    height: 100vh;
  }
`;

export const MainContainer = styled(ColumnContainer)`
  padding: 2em;
  align-items: center;
  @media only screen and (min-width: 600px) {
    padding: 7em 5em;
  }
`;
