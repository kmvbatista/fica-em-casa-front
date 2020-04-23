import styled from 'styled-components';
import { RegisterButton } from '../../pages/FirstSignup/styles';
import { Row, Column } from '../../globalComponents';

export const MainContainer = styled(Column)`
  height: 70%;
  position: relative;
  background-color: var(--color-purple);
  border-radius: 0 0 10% 10%;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
`;

export const ShareContainer = styled.div``;

export const ContinueButton = styled(RegisterButton)`
  background-color: var(--color-purple);
  width: 80%;
  height: unset;
  box-shadow: 0px 25px 20px rgba(0, 0, 0, 0.3);
  padding: 0.5em 0;
  font-size: 1.3em;
  &:active {
    transform: scale(0.9);
    box-shadow: 0px 40px 30px rgba(0, 0, 0, 0.3);
  }
`;

export const ShareIcons = styled(Row)`
  height: 5em;
  margin: 5% 0;
  justify-content: space-around;
`;
export const Text = styled.div`
  padding: 0 24%;
`;

export const IconContainer = styled(Column)`
  padding: 0.3em 0.3em 0.2em 0.3em;
  border: 1px solid var(--color-purple-dark);
  border-radius: 10px;
  color: var(--color-purple-dark);
  font-size: 1em;
  & > a {
    text-decoration: none;
  }
`;
