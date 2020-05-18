import styled, { css } from 'styled-components';
import { Row } from '../../../../globalComponents';

export const paddingDefault = css`
  padding: 1em 1em;
  @media only screen and (min-width: 600px) {
    padding: 1em 3em;
  }
`;

export const PeopleCard = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f9b0c336;
  color: white;
  font-weight: 200;
  align-items: center;
  border-radius: 10px 10px 0 0;
  position: relative;
  ${paddingDefault}
`;

export const CollapsibleCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9b0c336;
  border-radius: 0 0 10px 10px;
  ${paddingDefault}
`;

export const PersonAvatar = styled.div`
  border-radius: 38%;
  height: 5.25em;
  width: 5.25em;
  background-color: rgb(221, 221, 221);
  background-position: center;
  background-size: cover;
`;

export const PersonName = styled.p`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0.2em;
`;

export const Distance = styled.p`
  font-size: 1.6em;
  font-weight: 200;
  color: var(--color-grey-light3);
`;

export const ContactIcon = styled.div`
  margin-right: 0.5em;
  max-width: 4em;
  max-height: 4em;
`;

export const ExpandedButton = styled.div`
  width: 1.5em;
  position: absolute;
  right: -0.75em;
  top: 50%;
  transform: translate(0, -50%);
  color: white;
`;

export const HelpOptionCard = styled.div`
  border-radius: 20%;
  background-color: white;
  padding: 0.85em 1.1em;
  margin: 0em 0.8em 0.8em 0;
`;

export const GoToMapsButtonn = styled.div`
  padding: 1em 0em;
  text-align: center;
  background-color: var(--color-green);
  border-radius: 10px;
  position: relative;
  cursor: pointer;
`;

export const GoToMapsIcon = styled.img`
  position: absolute;
  bottom: 0;
  left: 1em;
  height: 89%;
  width: 3em;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 98%);
  gap: 3em;
  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 47.5%);
  }
`;

export const ContactContainer = styled(Row)`
  width: 25%;
  justify-content: space-between;
`;
