import styled from 'styled-components';

export const ArrowContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  padding: 0.5em;
  position: absolute;
  right: -0.8em;
  top: 50%;
  -webkit-transform: translate(0px, -50%);
  -ms-transform: translate(0px, -50%);
  transform: translate(0px, -50%);
  display: flex;
`;

export const Arrow = styled.img`
  width: 0.9em;
  height: 0.9em;
`;
