import styled from 'styled-components';
import { Input } from '../../pages/Profile/styles';

export const UpdatePwdInput = styled(Input)`
  &::placeholder {
    color: var(--color-purple-dark);
    border-bottom: 1px solid var(--color-purple-dark);
  }
`;
