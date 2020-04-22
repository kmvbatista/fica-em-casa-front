import styled from 'styled-components';
import { Column } from '../../globalComponents';
import { RegisterButton } from '../FirstSignup/styles';

export const MainBody = styled(Column)`
  background-color: var(--color-purple-dark);
  justify-content: unset;
  color: white;
  padding: 5.5em 4.5em 0 4.5em;
  border-radius: 24px 0 0 0;
  transform: translate(0em, -2em);
  min-height: 65vh;
  position: relative;
  & > p {
    margin-bottom: 2em;
    font-size: 1.5em;
  }
  & > strong {
    margin-bottom: 1.5em;
    font-size: 2.5em;
  }
`;

export const Header = styled.div`
  padding: 4.5em;
  padding-bottom: 6.5em;
  height: 35vh;
`;

export const AcceptButton = styled(RegisterButton)`
  background-color: var(--color-blue);
  position: fixed;
  bottom: 5%;
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 25px 20px rgba(0, 0, 0, 0.3);

  &:active {
    transform: translateX(-50%) scale(0.9);
    box-shadow: 0px 40px 30px rgba(0, 0, 0, 0.3);
  }
`;
