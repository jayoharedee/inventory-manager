import React, { Component } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

class SideMenu extends Component {
  state = { name: 'details' }

  handleItemClick = (e, { name }) => {
    this.setState({ name })
  }

  render() {
    const { name } = this.state
    return (
      <Menu secondary vertical size="tiny">
        <Menu.Item
          name="details"
          onClick={this.handleItemClick}
          active={name === 'details'}
        />
        <Menu.Item
          name="vendor"
          onClick={this.handleItemClick}
          active={name === 'vendor'}
        />
        <Menu.Item
          name="measurements"
          onClick={this.handleItemClick}
          active={name === 'measurements'}
        />
        <Dropdown item text="Options">
          <Dropdown.Menu>
            <Dropdown.Header>Text Size</Dropdown.Header>
            <Dropdown.Item>Small</Dropdown.Item>
            <Dropdown.Item>Medium</Dropdown.Item>
            <Dropdown.Item>Large</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    )
  }
}

export default SideMenu
