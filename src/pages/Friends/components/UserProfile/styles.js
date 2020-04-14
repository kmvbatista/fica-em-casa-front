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
