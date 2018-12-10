import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import history from '../history'

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleSelect = address => {
    history.push(address)
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state

    return (
      <div>
        <MenuIcon
          onClick={this.handleClick}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={() => this.handleSelect('/')}>Show all</MenuItem>
          <MenuItem onClick={() => this.handleSelect('/new')}>Upload new stats</MenuItem>
        </Menu>
      </div>
    )
  }
}

export default SimpleMenu
