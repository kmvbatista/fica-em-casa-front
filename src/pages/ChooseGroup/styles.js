import styled from 'styled-components';
import { Column } from '../../globalComponents';

export const Container = styled(Column)`
  min-height: 100vh;
  @media only screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const TitleContainer = styled.div`
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.text`
  font-weight: bolder;
  font-size: 2.5em;
  color: white;
  text-align: center;
`;

export const SubTitle = styled.text`
  color: white;
  font-size: 2.5em;
  font-weight: 500;
`;

export const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  height: ${(props) => (props.isUserLogged ? '34vh' : '50vh')};

  padding-bottom: 2em;
  background-color: var(--color-pink);
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 1200px) {
    height: 80vh;
    width: 34vw;
    padding: 0;
  }
`;

export const Box2 = styled(Box1)`
  transform: translate(0, -2em);
  border-radius: 0 2.5em 0 0;
  background-color: var(--color-purple);
  @media only screen and (min-width: 1200px) {
    transform: translate(-2em, 0em);
    border-radius: 2.5em 0 0 0;
  }
`;

export const Box3 = styled(Box1)`
  transform: translate(0, -4em);
  border-radius: 0 0 0 2.5em;
  background-color: var(--color-green);
  @media only screen and (min-width: 1200px) {
    transform: translate(-4em, 0em);
  }
`;

export const CenteredBox = styled.div`
  background-color: white;
  width: 60%;
  height: 20vh;
  border-radius: 30px;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  position: relative;
  @media only screen and (min-width: 1200px) {
    width: 70%;
  }
`;

export const HighlightText = styled.text`
  font-size: 3.5em;
  font-weight: bolder;
`;

export const SecondaryText = styled.text`
  font-size: 3.2em;
  font-weight: 500;
`;

export const Image = styled.img`
  height: 85%;
  position: absolute;
  top: 30%;
`;
