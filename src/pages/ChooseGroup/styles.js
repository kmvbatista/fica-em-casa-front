import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Title = styled.text`
  font-weight: bold;
  color: white;
`;

export const SubTitle = styled.text`
  color: white;
`;

export const Box1 = styled.div`
  display: flex;
  box-sizing: content-box;
  height: 50vh;
  padding-bottom: 2em;
  background-color: var(--color-pink);
  justify-content: center;
  align-items: center;
`;

export const Box2 = styled.div`
  display: flex;
  height: 50vh;
  transform: translate(0, -2em);
  border-radius: 0 2.5em 0 0;
  padding-bottom: 2em;
  background-color: var(--color-purple);
  justify-content: center;
  align-items: center;
`;

export const CenteredBox = styled.div`
  background-color: white;
  width: 70%;
  height: 24vh;
  border-radius: 30px;
`;
