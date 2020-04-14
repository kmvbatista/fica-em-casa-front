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
          <p
            style={{
              fontSize: '1.8em',
              marginLeft: '.5em',
              fontWeight: 'bold',
            }}
          >
            Sim
          </p>
        ) : (
          <p
            style={{ fontSize: '1.8em', marginLeft: '50%', fontWeight: 'bold' }}
          >
            Não
          </p>
        )}

        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
