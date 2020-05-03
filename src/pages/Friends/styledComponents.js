import styled from 'styled-components';
import { Column } from '../../globalComponents';

export const TopDecorationImage = styled.img.attrs((props) => ({
  src: props.isHelping ? './helpers.png' : './old-guys-dancing.png',
}))`
  position: absolute;
  top: 0em;
  height: 180%;
  background-size: cover;
`;

export const TopDecoration = styled.div`
  background-color: ${(props) =>
    props.isHelping ? 'var(--color-pink)' : 'var(--color-purple)'};
  height: 32vh;
  @media only screen and (min-height: 600px) {
    height: 35vh;
  }
`;

export const MainTab = styled(Column)`
  background-color: var(--color-pink);
  min-height: 100vh;
  padding: 3em 2em;
  transform: translate(0, 0px);
`;

export const MainPhrase = styled.p`
  font-size: 2.3em;
  color: white;
  margin-bottom: 1em;
`;
