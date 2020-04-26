import React from 'react';
import { useState } from 'react';
import LoaderContainer from '../LoaderContainer';
import { RegisterButton } from '../../pages/FirstSignup/styles';

export default function ButtonWithLoading({
  style,
  children,
  onClick,
  loaderColor,
}) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoaderContainer isLoading={isLoading} color={loaderColor}>
      <RegisterButton
        style={style}
        onClick={async () => {
          setIsLoading(true);
          await onClick();
          setIsLoading(false);
        }}
      >
        {children}
      </RegisterButton>
    </LoaderContainer>
  );
}
