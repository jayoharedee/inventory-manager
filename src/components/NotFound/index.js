import React from 'react'
import {
  Container,
  // Divider,
  // Dropdown,
  // Grid,
  Header,
  // Image,
  // List,
  // Menu,
  // Segment,
} from 'semantic-ui-react'

const NotFound = () => (
  <Container text style={{ marginTop: '7em' }} textAlign="centered">
    <Header as="h1" textAlign="centered">
      We're not quite sure where you're headed...
    </Header>
    <p>404 Content Here</p>
  </Container>
)

export default NotFound
