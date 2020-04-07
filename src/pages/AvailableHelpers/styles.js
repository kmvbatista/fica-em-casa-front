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

export const PeopleCard = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f9b0c336;
  margin-bottom: 1em;
  color: white;
  font-weight: 200;
  align-items: center;
  padding: 0.5em 0;
  border-radius: 10px;
  position: relative;
`;

export const PersonAvatar = styled.div`
  border-radius: 38%;
  position: relative;
  height: 4.8em;
  width: 4.8em;
`;

export const PersonName = styled.p`
  font-size: 1.6em;
  font-weight: bold;
  margin-bottom: 0.3em;
`;

export const Distance = styled.p`
  font-size: 1.4em;
  font-weight: 200;
`;

export const ContactIcon = styled.div`
  max-height: 3.5em;
  max-width: 3.5em;
  margin-right: 0.5em;
`;

export const ExpandedButton = styled.div`
  width: 1.5em;
  position: absolute;
  right: -0.75em;
  top: 50%;
  transform: translate(0, -50%);
  color: white;
`;
