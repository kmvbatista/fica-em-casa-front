import React from 'react';
import Loading from 'react-loading';

export default function LoaderContainer({ isLoading, children, color }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      {isLoading ? (
        <Loading
          color={color ? color : '#fff'}
          height='4em'
          width='4em'
          type='spinningBubbles'
        ></Loading>
      ) : (
        children
      )}
    </div>
  );
}
