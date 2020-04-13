import React from 'react';
import Loading from 'react-loading';
import ReactDOM from 'react-dom';

export default function Loader() {
  const wrapper = document.createElement('div');
  ReactDOM.render(
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Loading
        height='5em'
        width='5em'
        type='spinningBubbles'
        color='var(--color-pink)'
      ></Loading>
    </div>,
    wrapper,
  );
  return wrapper.firstChild;
}
