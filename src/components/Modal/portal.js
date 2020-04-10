import React from 'react';
import { createPortal } from 'react-dom';
import usePortal from './usePortal';
import './styles.css';

const Portal = ({ children }) => {
  const target = usePortal('modal');
  return createPortal(children, target);
};

export default Portal;
