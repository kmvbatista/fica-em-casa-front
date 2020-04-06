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
`;

export const PersonAvatar = styled.div`
  border-radius: 32%;
  position: relative;
  height: 5em;
  width: 5em;
`;

export const PersonName = styled.p`
  font-size: 1.6em;
  font-weight: bold;
  margin-bottom: 0.5em;
`;

export const Distance = styled.p`
  font-size: 1.4em;
  font-weight: 200;
`;
