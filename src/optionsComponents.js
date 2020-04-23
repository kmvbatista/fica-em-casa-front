import styled from 'styled-components';

export const ColumnContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: var(--color-pink);
  padding: 7em 0;
  align-items: center;
  @media only screen and (min-width: 600px) {
    padding: 6em 5em;
  }
  @media only screen and (min-width: 1400px) {
    padding: 10em 6em;
  }
  @media only screen and (min-width: 1800px) {
    padding: 10em 10em;
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

  @media only screen and (max-width: 600px) {
    height: 8em;
    width: 8em;
  }

  @media only screen and (max-width: 900px) {
    height: 9em;
    width: 9em;
  }
  @media only screen and (min-width: 900px) {
    height: 12em;
    width: 12em;
  }
`;

export const CardImage = styled.img`
  @media only screen and (max-width: 400px) {
    width: 2em;
  }

  @media only screen and (max-width: 900px) {
    width: 3.5em;
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
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 2.5em;
  align-self: center;
  margin-top: 5%;

  @media only screen and (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3.5em;
  }

  @media only screen and (min-width: 1400px) {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 3.5em;
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

export const Title = styled.p`
  font-size: 3.7em;
  font-weight: bold;
  color: white;
  width: 90%;
`;

export const SubTitle = styled.p`
  font-size: 1.7em;
  font-weight: 500;
  color: white;
  margin: 1.2em 0;
  text-align: justify;
  width: 90%;
`;

export const TextContainer = styled.div`
  width: 90%;
  @media only screen and (min-width: 600px) {
    width: 100%;
  }
`;
