import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core'

import { Link } from 'react-router-dom'
import SettingsIcon from '@material-ui/icons/Settings'

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
          <Link to="/">Movie List W4 📺</Link>
        </Typography>
        {props.user && <span>{props.user.userName}</span>}
        {props.user && (
          <span>
            <IconButton color="inherit">
              <Link to="/settings">
                <SettingsIcon />
              </Link>
            </IconButton>
            <Button onClick={props.onLogout} color="inherit">
              Logout
            </Button>
          </span>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
