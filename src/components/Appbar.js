import React from 'react';
import { AppBar, IconButton, Toolbar, Button } from '@material-ui/core';

export default function AppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexBasis: '100%',
          }}
        >
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          Super
          <Button color="inherit">Login</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};