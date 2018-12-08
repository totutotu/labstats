import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
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
          <MenuItem onClick={this.handleClose}>Show all</MenuItem>
          <MenuItem onClick={this.handleClose}>Uploaddsa new stats</MenuItem>
          <MenuItem onClick={this.handleClose}>Show Tuomo some appreciation</MenuItem>
        </Menu>
      </div>
    )
  }
}

export default SimpleMenu
