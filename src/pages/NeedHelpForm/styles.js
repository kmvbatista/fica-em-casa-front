import styled from 'styled-components';

export const Title = styled.div`
  color: white;
  font-size: 2.3em;
  font-weight: bolder;
  margin-bottom: em;
`;

export const InputBlock = styled.div`
  margin-bottom: 2em;
  display: flex;
  font-size: 1.7em;
  color: white;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1;
  display: block;
  border: none;
  min-width: 0;
  background-color: inherit;
  outline: none;
  color: white;
  font-size: 1.5em;
  text-align: center;
  font-weight: 200;
`;

export const InputBox = styled.div`
  border: white 2px solid;
  border-radius: 10px;
  background-color: transparent;
  width: 3.5em;
  height: 3.5em;
  margin-right: 1em;
  display: flex;
  position: relative;
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
  font-size: 1.1em;
`;

export const Select = styled.select`
  border: white 2px solid;
  border-radius: 10px;
  background-color: var(--color-pink);
  color: white;
  font-size: 1em;
  height: 3em;
  margin-right: 1em;
  width: 8em;
`;

export const GetModalButton = styled.div`
  cursor: pointer;
  display: block;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
`;
