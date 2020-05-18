import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

const Header = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography
          style={{
            flexGrow: 1,
          }}
          variant="h6">
          <span role="img" aria-label="popcorn!">
            🍿
          </span>
          Movie List W4 📺
        </Typography>
        {props.user && <span>{props.user.userName}</span>}
        {props.user && (
          <Button onClick={props.onLogout} color="inherit">
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
