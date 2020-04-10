import styled from 'styled-components';
import { OptionCard, Column } from '../../../globalComponents';

export const ConfirmationButton = styled.button`
  outline: none;
  padding: 1.3em 3em;
  border: none;
  border-radius: 1.5em;
  background-color: var(--color-yellow);
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
  padding: 5em 4.5em;
  justify-content: space-between;
  position: relative;
`;

export const MainContainer = styled(Column)`
  width: -webkit-fill-available;
  height: 71%;
  font-size: 1.5em;
`;

export const ItemsContainer = styled(Column)`
  & > * {
    margin-bottom: 1em;
    width: 100%;
    justify-content: space-between;
  }
`;

export const Quantity = styled.div`
  margin-left: 1.5em;
`;
export const QuantityButton = styled.button`
  border: none;
  outline: none;
  background-color: var(--color-yellow);
  text-align: center;
  height: 1em;
  width: 1em;
  border-radius: 26%;
  margin: 0 0.3em;
`;
