import React from 'react';
import Loading from 'react-loading';

export default function LoaderContainer({
  containerStyle,
  isLoading,
  children,
  color,
}) {
  let defaulContainerStyle = Object.assign(
    {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    containerStyle,
  );
  return (
    <div style={defaulContainerStyle}>
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
