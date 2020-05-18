import styled from 'styled-components';
import { Row, Column } from '../../globalComponents';

export const Container = styled(Column)`
  height: 50%;
  position: relative;
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
  background-color: rgb(241, 244, 249);
  border-radius: 20px 20px 0 0;
`;

export const SecondContainer = styled(Column)`
  border-radius: 20px 20px 0 0;
  background-color: var(--color-pink);
  height: 50%;
  padding: 2em;
  border-radius: 20px;
`;
export const WhatsContainer = styled(Row)`
  border-radius: 20px 20px 0 0;
  background-color: var(--color-purple);
  height: 13%;
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 20px;
`;

export const Title = styled.strong`
  font-size: 1.8em;
  width: 90%;
  margin-bottom: 1em;
`;

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 1.3em;
  width: 95%;
`;

export const CloseButton = styled.img`
  width: 2em;
  height: 2em;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
`;
