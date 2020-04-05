import styled from 'styled-components';

export const Title = styled.p`
  font-size: 3.7em;
  font-weight: bold;
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
  cursor: pointer;
  margin: auto;
  height: 7em;
  width: 7em;
  border-radius: 17px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: var(--color-pink);
  font-weight: bold;
  font-size: 1.28em;
  padding: 15px 0;
  text-align: center;
  @media only screen and (min-width: 610px) {
    height: 5.5em;
    width: 6.5em;
  }
  @media only screen and (min-width: 900px) {
    height: 6em;
    width: 7em;
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
`;
