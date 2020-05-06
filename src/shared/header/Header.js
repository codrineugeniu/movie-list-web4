import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">🍿 Movie List W4 📺</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}


export default Header;