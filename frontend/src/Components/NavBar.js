import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SimpleMenu from './Menu'

const NavBar = () => (
  <AppBar color="secondary">
    <Toolbar>
      <SimpleMenu />
      <Typography variant="h6" style={{ marginLeft: '12px', color: 'white' }}>
        Lab Stats
      </Typography>
    </Toolbar>
  </AppBar>
)

export default NavBar
