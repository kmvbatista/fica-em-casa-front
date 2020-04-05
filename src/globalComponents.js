import styled from 'styled-components';

export const PinkContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: var(--color-pink);
  justify-content: space-around;
  padding: 6em 4em 0 4em;
  @media only screen and (min-width: 1400px) {
    padding: 6em 10em 0 10em;
  }
  @media only screen and (min-width: 1800px) {
    padding: 6em 20em 0 20em;
  }
`;
