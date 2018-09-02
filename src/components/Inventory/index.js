import React, { Fragment } from 'react'
import {
  // Container,
  Header,
  // Icon,
  // Image,
  Grid,
  // Button,
  // Label,
} from 'semantic-ui-react'

import SideMenu from './SideMenu'
import Details from './Details'

const Inventory = () => (
  <Fragment>
    <Header as="h1" dividing>
      Add Inventory
    </Header>

    <Grid columns={6}>
      <Grid.Row>
        <Grid.Column>
          <SideMenu />
        </Grid.Column>
        <Grid.Column>
          <Details />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Fragment>
)

export default Inventory
