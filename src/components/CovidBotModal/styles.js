import styled from 'styled-components';
import { Row, Column } from '../../globalComponents';

export const Container = styled.div`
  height: 50%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const SecondContainer = styled(Column)`
  border-radius: 20px 20px 0 0;
  background-color: var(--color-pink);
  height: 50%;
  padding: 2em;
`;
export const WhatsContainer = styled(Row)`
  border-radius: 20px 20px 0 0;
  background-color: var(--color-purple);
  height: 10%;
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

export const Title = styled.strong`
  font-size: 1.5em;
  width: 90%;
  margin-bottom: 1em;
`;

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 1em;
  width: 95%;
`;
