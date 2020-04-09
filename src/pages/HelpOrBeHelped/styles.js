import styled from 'styled-components';
import { Row } from '../../globalComponents';

export const TopDecorationImage = styled.img.attrs((props) => ({
  src: props.isHelping ? './helpers.png' : './old-guys-dancing.png',
}))`
  position: absolute;
  top: 0em;
  height: 180%;
  background-size: cover;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const TopDecoration = styled.div`
  background-color: ${(props) =>
    props.isHelping ? 'var(--color-pink)' : 'var(--color-purple)'};
  height: 25vh;
  position: relative;
`;

export const MainTab = styled.div`
  background-color: var(--color-pink);
  min-height: 100vh;
  z-index: 100;
  padding: 3em;
`;

export const MainPhrase = styled.p`
  font-size: 2.3em;
  color: white;
  margin-bottom: 1em;
`;

export const Tab = styled.div`
  background-color: ${(props) =>
    props.isHelping ? 'var(--color-purple)' : 'var(--color-pink)'};
  border-radius: 0 2em 0 0;
  width: 54%;
  padding: 1em 3em;
  position: absolute;
  font-size: 1.4em;
  cursor: pointer;
  ${(props) =>
    props.highLight
      ? `
  filter: brightness(0.86);
  z-index: 0;
  `
      : `
    padding: 1.3em 3em;
  z-index: 1000;
  `}
`;

export const HighlightTab = styled(Tab)`
  left: 0;
  padding: 1.3em 3em;
  z-index: 1000;
`;
export const SecondaryTab = styled(Tab)`
  filter: brightness(0.86);
  z-index: 0;
`;

export const TabContainer = styled(Row)`
  width: 90%;
  position: relative;
  height: 3em;
  flex-direction: column;
  justify-content: center;
`;
