import styled, { css } from 'styled-components';

const desktopContainer = css`
  width: 50%;
  height: 100%;
`;
const column = css`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  padding: 0px;
  @media only screen and (max-width: 600px) {
    height: 100vh;
  }
  @media only screen and (min-width: 600px) {
    display: flex;
    justify-content: center;
    height: 100vh;
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
export const Welcome = styled.div`
  background-color: var(--color-purple);
  color: white;
  padding: 4.5em;
  padding-bottom: 6.5em;
  height: 35vh;
  ${column}
  justify-content: center;
  @media only screen and (min-width: 600px) {
    ${desktopContainer}
  }
`;

export const InitialForm = styled.div`
  padding: 3em 4.5em 0 4.5em;

  border-radius: 24px 0 0 0;
  background-color: white;
  transform: translate(0em, -2em);
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0px;
  }
  ${column}
  & > * {
    margin-bottom: 2em;
  }
  height: 50vh;
  @media only screen and (max-width: 600px) {
    height: calc(65% + 2em);
  }
  @media only screen and (min-width: 600px) {
    padding: 5.5em 4.5em 0 4.5em;
    transform: translate(-2em, 0em);
    ${desktopContainer}
    & > * {
      margin-bottom: 0em;
    }
    justify-content: space-around;
  }
`;

export const Title = styled.h3`
  margin-bottom: 1.5em;
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
  height: 3.5em;
  &:active {
    transform: scale(0.9);
    box-shadow: 0px 25px 20px rgba(230, 31, 123, 0.5);
  }
  transition: all 0.5s;
  cursor: pointer;
`;

export const LoginInput = styled.input`
  border-radius: 1.5em;
  border: none;
  background-color: rgba(110, 36, 195, 0.06);
  height: 3.5em;
  line-height: 25px;
  font-size: 1.5em;
  text-align: center;
  color: var(--color-purple-dark);
  outline: none;
  width: 100%;
  &::placeholder {
    padding: 0;
    margin: 0;
    color: rgba(57, 12, 109, 0.3);
  }
  &:focus {
    border: 1px solid var(--color-purple-dark);
  }
`;

export const TextLink = styled.p`
  text-decoration: underline;
  text-align: center;
  cursor: pointer;
  color: var(--color-purple-dark);
  margin-top: 1em;
  font-size: 1.4em;
`;
