import styled from 'styled-components';
import { Row } from '../../../../globalComponents';

export const ProfileImage = styled.div`
  border-radius: 20px;
  height: 10em;
  width: 10em;
  background-size: cover;
  background-image: ${(props) =>
    props.imageUrl ? `url(${props.imageUrl})` : "url('./mulher.png')"};
`;

export const ProfileContainer = styled(Row)`
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 0 20%;
  transform: translateY(40%);
`;
