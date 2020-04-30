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

export const Title = styled.p`
  font-weight: bolder;
  font-size: 2.5em;
  color: white;
  text-align: center;
`;

export const SubTitle = styled.p`
  color: white;
  font-size: 2.5em;
  font-weight: 500;
`;

export const Box1 = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  height: ${(props) => (props.userJustRegistered ? '50vh' : '34vh')};
  font-size: 0.8em;
  padding-bottom: 2em;
  background-color: var(--color-pink);
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 900px) {
    height: 100vh;
    width: ${(props) => (props.userJustRegistered ? '50vw' : '34vw')};
    padding: 0;
  }
`;

export const Box2 = styled(Box1)`
  transform: translate(0, -2em);
  border-radius: 0 2.5em 0 0;
  background-color: var(--color-purple);
  height: ${(props) => (props.userJustRegistered ? '50vh' : '34vh')};

  @media only screen and (min-width: 1200px) {
    transform: translate(-2em, 0em);
    border-radius: 2.5em 0 0 0;
  }
`;

export const Box3 = styled(Box1)`
  transform: translate(0, -4em);
  border-radius: 0 0 0 2.5em;
  background-color: var(--color-green);
  height: 34vh;

  @media only screen and (min-width: 1200px) {
    transform: translate(-4em, 0em);
    border-radius: 2.5em 0 0 0;
  }
`;

export const CenteredBox = styled.div`
  background-color: white;
  width: 70%;
  height: 17vh;
  border-radius: 30px;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

export const HighlightText = styled.p`
  font-size: 3.5em;
  font-weight: bolder;
`;

export const SecondaryText = styled.p`
  font-size: 3.2em;
  font-weight: 500;
`;

export const Image = styled.img`
  height: 85%;
  position: absolute;
  top: 30%;
`;
