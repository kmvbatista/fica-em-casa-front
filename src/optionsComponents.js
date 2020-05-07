import styled from 'styled-components';

export const ColumnContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: var(--color-pink);
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: 900px) {
    padding: 0 2em;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0 15em;
  }
  @media only screen and (min-width: 1400px) {
    padding: 0 6em;
  }
  @media only screen and (min-width: 1800px) {
    padding: 0 10em;
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

  @media only screen and (max-width: 400px) {
    height: 7.8em;
    width: 7.8em;
  }

  @media only screen and (max-width: 340px) {
    height: 6.5em;
    width: 6.5em;
  }

  @media only screen and (min-width: 400px) {
    height: 10em;
    width: 10em;
  }

  @media only screen and (min-width: 1400px) {
    height: 12em;
    width: 12em;
  }
`;

export const TextContainer = styled.div`
  @media only screen and (max-width: 400px) {
    width: calc(3 * 7.8em + 2 * 2.5em);
  }

  @media only screen and (max-width: 340px) {
    width: calc(3 * 6.5em + 2 * 3.5em);
  }

  @media only screen and (min-width: 400px) {
    width: calc(3 * 10em + 2 * 2.5em);
  }

  @media only screen and (min-width: 900px) {
    width: calc(6 * 10em + 5 * 2.5em);
  }

  @media only screen and (min-width: 1400px) {
    width: calc(6 * 12em + 5 * 3.5em);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 10em);
  grid-auto-rows: 1fr;
  grid-gap: 2.5em;
  align-self: center;

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(3, 10em);
  }

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(3, 7.8em);
  }

  @media only screen and (max-width: 340px) {
    grid-template-columns: repeat(3, 6.5em);
  }
  @media only screen and (min-width: 900px) {
    grid-template-columns: repeat(6, 10em);
  }

  @media only screen and (min-width: 1400px) {
    grid-template-columns: repeat(6, 12em);
    grid-gap: 3.5em;
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
  font-size: 1.2em;
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
  margin-bottom: 0.5em;
`;

export const SubTitle = styled.span`
  font-size: 1.7em;
  font-weight: 500;
  color: white;
  padding-top: 2em;
  text-align: left;
`;
