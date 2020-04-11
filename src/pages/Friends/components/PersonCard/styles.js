import styled from 'styled-components';

export const PeopleCard = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f9b0c336;
  color: white;
  font-weight: 200;
  align-items: center;
  padding: 0.7em 0;
  border-radius: 10px 10px 0 0;
  position: relative;
  margin-bottom: 0.1em;
`;

export const CollapsibleCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 3em;
  background-color: #f9b0c336;
  border-radius: 0 0 10px 10px;
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
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 0.5em;
`;

export const Distance = styled.p`
  font-size: 1.3em;
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
  margin-right: 0.8em;
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
`;
