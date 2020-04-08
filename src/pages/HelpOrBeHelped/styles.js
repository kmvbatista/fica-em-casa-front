import styled from 'styled-components';

export const TabContainer = styled.div`
  background-color: ${(props) =>
    props.isHelping ? 'var(--color-purple)' : 'var(--color-pink)'};
`;

export const TopDecorationImage = styled.img.attrs((props) => ({
  src: props.isHelping ? './old-guys-dancing.png' : './helpers.png',
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
  z-index: -1;
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