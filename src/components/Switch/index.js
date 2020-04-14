import React from 'react';
import './styles.css';

const Switch = ({ isOn, handleToggle, onColor }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className='react-switch-checkbox'
        id={`react-switch-new`}
        type='checkbox'
      />
      <label
        style={{ background: isOn && onColor }}
        className='react-switch-label'
        htmlFor={`react-switch-new`}
      >
        {isOn ? (
          <strong style={{ fontSize: '1.5em', marginLeft: '1em' }}>Sim</strong>
        ) : (
          <strong style={{ fontSize: '1.5em', marginLeft: '60%' }}>Não</strong>
        )}

        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
