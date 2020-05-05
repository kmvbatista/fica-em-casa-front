import styled from 'styled-components';
import { OptionCard } from '../../../optionsComponents';
import { Column, Row } from '../../../globalComponents';

export const ConfirmationButton = styled.button`
  outline: none;
  padding: 1.1em 0;
  border: none;
  border-radius: 1.5em;
  background-color: var(--color-yellow);
  opacity: 1;
  transition: all 0.5s;
  background-color: var(--color-green);
  cursor: pointer;
  font-size: 1.25em;
  @media only screen and (max-width: 900px) {
    width: 40%;
    font-size: 1.1em;
  }
`;

export const CancelHelpButton = styled(ConfirmationButton)`
  background-color: var(--color-pink);
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const CancelChangeButton = styled(ConfirmationButton)`
  background-color: var(--color-purple);

  @media only screen and (max-width: 900px) {
    background-color: var(--color-pink);
  }
`;

export const Card = styled(OptionCard)`
  height: 4em;
  width: 4em;
  border-radius: 7px;
  margin: 0;
  margin-right: 1em;
`;

export const ModalContainer = styled(Column)`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  position: relative;
  @media only screen and (max-width: 1200px) {
    padding: 4em 15em 1em 15em;
  }
  @media only screen and (max-width: 600px) {
    padding: 2em 2.5em 1em 2.5em;
  }

  @media only screen and (max-width: 400px) {
    padding: 2em 1em 1em 1em;
  }
  @media only screen and (min-width: 1200px) {
    padding: 4em 20em 1em 20em;
  }
`;

export const MainContainer = styled(Column)`
  width: -webkit-fill-available;
  height: 71%;
  font-size: 1.5em;
  overflow-y: scroll;
  overflow-x: hidden;
  @media only screen and (min-width: 900px) {
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
  }
`;

export const ItemsContainer = styled(Column)`
  & > * {
    margin-bottom: 1em;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Quantity = styled(Row)`
  align-items: center;
  & > * {
    height: 1.5em;
    width: 1.5em;
    display: inline-block;
    text-align: center;
    margin: 0.5em;
  }
`;
export const QuantityButton = styled.button`
  border: none;
  outline: none;
  background-color: var(--color-yellow);
  text-align: center;
  border-radius: 26%;
  margin: 0em;
`;

export const ItemInput = styled.input`
  border: none;
  border-bottom: 2px solid var(--color-yellow);
  height: 3em;
  line-height: 15px;
  background-color: transparent;
  color: white;
  outline: none;
  width: 9em;
  font-weight: bold;
`;

export const SelectUnit = styled.select`
  border: none;
  border-bottom: 2px solid var(--color-yellow);
  height: 3em;
  line-height: 15px;
  background-color: transparent;
  color: white;
  outline: none;
  width: fit-content;
  margin-right: 1em;
  & > option {
    background-color: black;
  }
`;
