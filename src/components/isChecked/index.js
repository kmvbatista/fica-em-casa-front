import React from 'react';

export default function IsChecked({ isChecked, color, icon }) {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          borderRadius: 'inherit',
          display: isChecked ? 'flex' : 'none',
          zIndex: '1',
          backgroundColor: color,
          filter: 'opacity(0.7)',
        }}
      ></div>
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          borderRadius: 'inherit',
          display: isChecked ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: '2',
        }}
      >
        <img
          src={icon ? icon : './check.svg'}
          alt='categoria cadastrada'
          style={{ width: icon ? '50%' : '30%', height: icon ? '50%' : '30%' }}
        />
      </div>
    </>
  );
}
