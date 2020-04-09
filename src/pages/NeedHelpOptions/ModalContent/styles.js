import styled from 'styled-components';
import { OptionCard } from '../../../globalComponents';

export const ConfirmationButton = styled.button`
  outline: none;
  padding: 2em 3em;
  display: block;
  border: none;
  border-radius: 30%;
  background-color: var(--color-yellow);
`;

export const Card = styled(OptionCard)`
  height: '1.5em';
  width: '1.5em';
  margin: 0;
`;
