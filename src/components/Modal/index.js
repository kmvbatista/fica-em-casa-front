import React from 'react';
import Portal from './portal';

export default function Modal(props) {
  return (
    <Portal>
      <div className='closeButton' onClick={props.close}>
        X
      </div>
      {props.children}
    </Portal>
  );
}
