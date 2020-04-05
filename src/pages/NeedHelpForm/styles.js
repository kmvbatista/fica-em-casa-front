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
  align-items: center;
`;

export const Input = styled.input`
  border: white 2px solid;
  border-radius: 10px;
  background-color: var(--color-pink);
  width: 4em;
  height: 4em;
  margin-right: 1em;
`;

export const RadioButton = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-block;
  border: white 2px solid;
  border-radius: 10px;
  width: 3.5em;
  height: 3.5em;
  margin-right: 1em;
  text-align: center;
  padding: 0.975em 0;
  font-weight: bolder;
`;

export const Question = styled.div`
  width: 30%;
  margin-right: 10%;
`;
