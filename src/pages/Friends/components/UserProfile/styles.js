import styled from 'styled-components';
import { Row } from '../../../../globalComponents';

export const ProfileImage = styled.div`
  border-radius: 20px;
  height: 7em;
  width: 7em;
  background-size: cover;
  background-image: ${(props) =>
    props.imageUrl ? `url(${props.imageUrl})` : "url('./mulher.png')"};
`;

export const ProfileContainer = styled(Row)`
  width: 100%;
  max-width: 50em;
  justify-content: space-around;
  align-items: center;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SetCategoriesButton = styled.button`
  margin-top: 5px;
  border-radius: 30px;
  outline: none;
  border: none;
  color: white;
  background-color: var(--color-purple);
  padding: 1em 0.5em;
  box-shadow: 0px 10px 20px rgba(230, 31, 123, 0.5);
  font-size: 2em;
  font-weight: bold;
  margin: 2em;
  cursor: pointer;
`;
