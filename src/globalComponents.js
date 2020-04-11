import styled from 'styled-components';

export const ColumnContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: var(--color-pink);
  padding: 6em 4em 0 4em;
  @media only screen and (min-width: 1400px) {
    padding: 6em 10em 0 10em;
  }
  @media only screen and (min-width: 1800px) {
    padding: 6em 20em 0 20em;
  }
`;

export const OptionCard = styled.div`
  cursor: pointer;
  margin: auto;
  height: 8em;
  width: 8em;
  border-radius: 17px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: var(--color-pink);
  font-weight: bold;
  padding: 10px 0;
  text-align: center;
  @media only screen and (max-width: 900px) {
    height: 6.5em;
    width: 6.5em;
  }
  @media only screen and (min-width: 900px) {
    height: 7em;
    width: 7em;
  }
`;

export const GridText = styled.p`
  font-size: 1.25em;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 1.2em;
`;

export const GetModalButton = styled.div`
  cursor: pointer;
  display: block;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 4em;
  background-color: white;
  color: var(--color-pink);
  font-size: 1.5em;
  padding: 1em;
  width: 90%;
  max-width: 400px;
  margin: 1.5em auto 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
`;
