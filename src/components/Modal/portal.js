import { createPortal } from 'react-dom';
import usePortal from './usePortal';
import './styles.css';

const Portal = ({ children }) => {
  const target = usePortal();
  return createPortal(children, target);
};

export default Portal;
