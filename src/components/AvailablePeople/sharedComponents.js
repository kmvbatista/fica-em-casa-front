import styled from 'styled-components';

export const TopDecoration = styled.div`
  height: 25vh;
  background-color: var(--color-purple);
  position: relative;
  z-index: -1;
`;

export const MainTab = styled.div`
  background-color: var(--color-pink);
  border-radius: 20px 0 0 0;
  min-height: 100vh;
  z-index: 100;
  transform: translate(0, -4em);
  padding: 3em;
`;

export const MainPhrase = styled.p`
  font-size: 2.3em;
  color: white;
  margin-bottom: 1em;
`;
