import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
  Dropdown,
  Image,
  Menu,
} from 'semantic-ui-react'

const TopNav = () => (
  <Fragment>
    <Menu fixed="top" style={{ borderRadius: 0 }}>
      <Menu.Item as="a" header>
        <Image
          size="mini"
          circular
          src="https://picsum.photos/30/30"
          style={{ marginRight: '1.5em' }}
        />
        CMS
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/">Dashboard</Menu.Item>

        <Dropdown item simple text="Inventory Management">
          <Dropdown.Menu>
            {/*Remind to ask about order by most used*/}
            <Dropdown.Item>View Inventory</Dropdown.Item>{' '}
            <Dropdown.Item as={Link} to="/inventory/add">
              Create Inventory
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Other Tasks</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Category</span>
              <Dropdown.Menu>
                <Dropdown.Item>Sub Task</Dropdown.Item>
                <Dropdown.Item>Sub Task</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>Another Task</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item simple text="Content Management">
          <Dropdown.Menu>
            <Dropdown.Item>Create Content</Dropdown.Item>{' '}
            {/*Remind to ask about order by most used*/}
            <Dropdown.Item>View Inventory</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Other Tasks</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  </Fragment>
)

export default TopNav
