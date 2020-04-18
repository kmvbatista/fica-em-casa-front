import styled, { css } from 'styled-components';

const desktopContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

export const Container = styled.div`
  padding: 0px;
  @media only screen and (min-width: 600px) {
    display: flex;
    justify-content: center;
    height: 75vh;
  }
`;

export const Welcome = styled.div`
  background-color: var(--color-purple);
  color: white;
  padding: 4.5em;
  padding-bottom: 6.5em;
  @media only screen and (min-width: 600px) {
    ${desktopContainer}
  }
`;

export const LoginTitle = styled.h3`
  color: white;
  font-weight: bold;
  font-size: 2em;
`;

export const Subtitle = styled.h4`
  font-weight: 600;
  font-size: 1.5em;
`;

export const InitialForm = styled.div`
  padding: 4.5em;
  border-radius: 24px 0 0 0;
  background-color: white;
  transform: translate(0em, -2em);
  @media only screen and (min-width: 600px) {
    transform: translate(-2em, 0em);
    ${desktopContainer}
  }
`;

export const Title = styled.h3`
  margin-bottom: 0.5em;
  font-weight: bold;
  font-size: 2em;
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
  font-size: 1.5em;
  font-weight: bold;
  height: 3em;
`;

export const LoginInput = styled.input`
  border-radius: 1.5em;
  border: none;
  background-color: rgba(110, 36, 195, 0.06);
  height: 3em;
  line-height: 25px;
  font-size: 1.5em;
  text-align: center;
  color: var(--color-purple-dark);
  outline: none;
  &:focus {
    border: 1px solid var(--color-purple-dark);
  }
`;
