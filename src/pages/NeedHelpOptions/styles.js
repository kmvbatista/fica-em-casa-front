import styled from 'styled-components';

export const Title = styled.p`
  font-size: 4.3em;
  font-weight: bolder;
  color: white;
`;

export const SubTitle = styled.p`
  font-size: 1.8em;
  font-weight: 500;
  color: white;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-row-gap: 1.1em;
`;

export const OptionCard = styled.div`
  height: 5em;
  width: 6em;
  border-radius: 17px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: var(--color-pink);
  font-weight: bold;
  font-size: 1.4em;
  padding: 5px 0;
  text-align: center;
  @media only screen and (min-width: 610px) {
    height: 7em;
    width: 8em;
  }
  @media only screen and (min-width: 900px) {
    height: 8em;
    width: 9em;
  }
`;
