import styled from 'styled-components';
import { Row } from '../../../globalComponents';

export const Tab = styled.div`
  background-color: ${(props) =>
    props.isHelping ? 'var(--color-purple)' : 'var(--color-pink)'};
  border-radius: 0 2em 0 0;
  width: 54%;
  padding: 1em 3em;
  position: absolute;
  font-size: 1.4em;
  cursor: pointer;
  ${(props) =>
    props.highLight
      ? `
  filter: brightness(0.86);
  z-index: 0;
  `
      : `
    padding: 1.3em 3em;
  z-index: 1000;
  `}
`;

export const HighlightTab = styled(Tab)`
  left: 0;
  padding: 1.3em 3em;
  z-index: 1000;
`;
export const SecondaryTab = styled(Tab)`
  filter: brightness(0.86);
  z-index: 0;
`;

export const TabContainer = styled(Row)`
  width: 90%;
  position: relative;
  height: 3em;
  flex-direction: column;
  justify-content: center;
`;
