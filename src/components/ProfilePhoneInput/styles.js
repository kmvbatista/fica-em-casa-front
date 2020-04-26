import styled from 'styled-components';

export const SignupSelect = styled.select`
  border-radius: 1em;
  border: none;
  background-color: rgba(110, 36, 195, 0.06);
  height: 3.7em;
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
