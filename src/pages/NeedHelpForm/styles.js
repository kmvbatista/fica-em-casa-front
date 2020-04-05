import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: var(--color-pink);
  padding: 3em;
  justify-content: space-around;
`;

export const Title = styled.div`
  color: white;
  font-size: 2em;
  font-weight: bolder;
`;

export const InputBlock = styled.div`
  margin-bottom: 2em;
  display: flex;
  font-size: 1.7em;
  color: white;
`;

export const Input = styled.input`
  border: white 2px solid;
  border-radius: 10px;
  background-color: var(--color-pink);
  width: 4em;
  height: 4em;
  margin-right: 1em;
`;

export const Span = styled.span`
  position: absolute;
  display: inline-block;
  border: white 2px solid;
  border-radius: 10px;
  background-color: transparent;
  width: 3.5em;
  height: 3.5em;
  margin-right: 1em;
  z-index: 20;
`;
