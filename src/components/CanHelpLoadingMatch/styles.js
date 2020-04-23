import styled from 'styled-components';

export const Title = styled.div`
  color: var(--color-purple-dark);
  font-size: 3.3em;
  font-weight: 800;
  text-align: center;
  margin-top: 2em;
`;

export const EffectReticences = styled.div`
  width: 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  letter-spacing: 2px;
  animation-name: reticences;
  animation-timing-function: ease-in-out;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  @keyframes reticences{
    0%{
      width: 0;
    }
    33%{
      width: 6px;
    }
    66%{
      width: 13px;
    }
    100%{
      width: 20px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
`;

export const Column = styled.div``;

export const FilledCircle = styled.div`
width: 25px;
height: 25px;
border-radius: 100%;
background: var(--color-pink);
position: absolute;
right: 10%;
bottom: 15%;
animation-name: Floating1;
animation-timing-function: ease-in-out;
animation-duration: 1.5s;
animation-iteration-count: infinite;
animation-direction: alternate-reverse;
@keyframes Floating1{
  from{
    transform: translate(0, 0);
  }
  to{
    transform: translate(0, 10px);
  }
}
`;

export const OutlinedCirclePurple = styled.div`
width: 14px;
height: 14px;
border-radius: 100%;
border: 3px solid var(--color-purple-dark);
position: absolute;
left: 20%;
bottom: 30%;
animation-name: Floating2;
animation-timing-function: ease-in-out;
animation-duration: 1s;
animation-iteration-count: infinite;
animation-direction: alternate-reverse;
@keyframes Floating2{
  from{
    transform: translate(0, 0);
  }
  to{
    transform: translate(5px, 5px);
  }
}
`;

export const OutlinedCirclePink = styled.div`
width: 30px;
height: 30px;
border-radius: 100%;
border: 1px solid var(--color-pink);
position: absolute;
right: 5%;
top: 30%;
animation-name: Floating3;
animation-timing-function: ease-in-out;
animation-duration: 1s;
animation-iteration-count: infinite;
animation-direction: alternate-reverse;
@keyframes Floating3{
  from{
    transform: translate(0, 0);
  }
  to{
    transform: translate(10px, 0px);
  }
}
`;

export const ElementX = styled.div`
position: absolute;
left: 5%;
top: 30%;
animation-name: Floating4;
animation-timing-function: ease-in-out;
animation-duration: 1.3s;
animation-iteration-count: infinite; 
animation-direction: alternate-reverse;
@keyframes Floating4{
  from{
    transform: translate(0, 0);
  }
  to{
    transform: translate(5px, -10px);
  }
}
`;

export const PingContainer = styled.div`
width: 140px;
height: 140px;
top: calc(50% - 40px);
left: calc(50% - 70px);
display: block;
position: absolute;
`;

export const MainPing = styled.div`
width: 100%;
height: 100%;
background: #845EE8;
display: block;
border-radius: 100%;
text-align: center;
padding: 15px;
z-index: 200;
position: relative;
`;

export const OuterPing = styled.div`
  display: block;
  border-radius: 100%;
  position: absolute;
  z-index: 100;
  animation-name: ping;
  animation-timing-function: ease-out;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 0.5s;
  @keyframes ping{
    from{
      width: 10px;
      height: 10px;
      top: calc(50% - 5px);
      left: calc(50% - 5px);
      background: rgba(132, 94, 232, 0.2);
    }
    to{
      width: 380px;
      height: 380px;
      top: calc(50% - 190px);
      left: calc(50% - 190px);
      background: rgba(132, 94, 232, 0.04);
    }
  }
`;

export const OuterPingMd = styled.div`
  display: block;
  border-radius: 100%;
  position: absolute;
  top: calc(50% - 170px);
  left: calc(50% - 170px);
  z-index: 100;
  animation-name: ping;
  animation-timing-function: ease-out;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 1s;
`;

export const OuterPingXl = styled.div`
  display: block;
  border-radius: 100%;
  position: absolute;
  z-index: 100;
  animation-name: ping;
  animation-timing-function: ease-out;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 1.5s;
`;