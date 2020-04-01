import React from 'react';
import { AppBar, IconButton, Toolbar, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function CustomAppBar() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexBasis: '100%',
          }}
        >
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          Solidarity
          <Button color='inherit'>Login</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
