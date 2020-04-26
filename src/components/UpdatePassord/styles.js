import styled from 'styled-components';
import { Input } from '../../pages/Profile/styles';

export const UpdatePwdInput = styled(Input)`
  border-bottom: 1px solid var(--color-purple-dark);
  color: var(--color-purple-dark);
  font-size: 1.5em;
  text-align: center;

  &::placeholder {
    color: var(--color-grey-dark-2);
    font-size: 0.7em;
  }
`;
