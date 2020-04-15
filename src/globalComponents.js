import styled from 'styled-components';

export const ColumnContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: var(--color-pink);
  padding: 4em 4em 0 4em;
  align-items: flex-start;
  @media only screen and (min-width: 600px) {
    padding: 6em 5em;
  }
  @media only screen and (min-width: 1400px) {
    padding: 6em 10em;
  }
  @media only screen and (min-width: 1800px) {
    padding: 6em 20em;
  }
`;

export const OptionCard = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: auto;
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
    height: 10em;
    width: 10em;
  }
  @media only screen and (max-width: 600px) {
    height: 8em;
    width: 8em;
  }

  @media only screen and (min-width: 400px) {
    height: 9em;
    width: 9em;
  }

  @media only screen and (min-width: 900px) {
    height: 12em;
    width: 12em;
  }
`;

export const CardImage = styled.img`
  @media only screen and (max-width: 900px) {
    width: 3.5em;
  }
  @media only screen and (max-width: 400px) {
    width: 2.5em;
  }

  @media only screen and (min-width: 400px) {
    width: 3em;
  }

  @media only screen and (min-width: 900px) {
    width: 4em;
  }
`;

export const GridText = styled.p`
  font-size: 1.25em;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 8em);
  grid-auto-rows: 1fr;
  grid-gap: 2.5em;
  align-self: center;
  margin-top: 5%;

  @media only screen and (min-width: 400px) {
    grid-template-columns: repeat(3, 9em);
    grid-gap: 3em;
  }

  @media only screen and (min-width: 900px) {
    grid-template-columns: repeat(4, 10em);
    grid-gap: 5em;
  }

  @media only screen and (min-width: 900px) {
    grid-template-columns: repeat(4, 12em);
    grid-gap: 6em;
  }
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
  width: 100%;
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
