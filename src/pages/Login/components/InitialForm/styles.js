import styled from 'styled-components';

export const Container = styled.div`
  padding: 4.5em;
  border-radius: 24px 0 0 0;
  background-color: white;
  transform: translate(0px, -2em);
`;
export const LoginInput = styled.input`
  border-radius: 1.5em;
  border: none;
  background-color: rgba(110, 36, 195, 0.06);
  height: 4em;
  line-height: 25px;
`;

export const Title = styled.h3`
  margin-bottom: 1.5em;
  font-weight: bold;
  font-size: 2.5em;
  line-height: 1;
  font-weight: bolder;
  color: var(--color-purple);
`;
export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const RegisterButton = styled.button`
  margin-top: 5px;
  border-radius: 30px;
  outline: none;
  border: none;
  width: 100%;
  color: white;
  background-color: var(--color-pink);
  padding: 1em 0.5em;
  box-shadow: 0px 10px 20px rgba(230, 31, 123, 0.5);
  font-size: 2em;
  font-weight: bold;
`;
