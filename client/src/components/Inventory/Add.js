import React, { Component } from 'react'
// import {
//   Form,
//   Grid,
//   Segment,
//   Message,
//   Dropdown,
//   Menu,
//   Icon,
//   Button,
// } from 'semantic-ui-react'

const handleItemClick = () => {}

class Add extends Component {
  state = { name: '' }

  handleItemClick = (e, { name }) => {
    this.setState({ name })
  }

  render() {
    const { name } = this.state
    return <div />
  }
}

export default Add

/**
 *
 * 
 * <Grid columns={6}>
    <Grid.Row stretched>
      <Grid.Column>
        <Form>
            <Form.Input label="Item Number" placeholder="Item #" />
        </Form>
      </Grid.Column>
      <Grid.Column>
        <Form>
          <Form.Input
            label="Primary Vendor"
            placeholder="Primary Vendor"
          />
        </Form>
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>
  </Grid>



  
    <Form>
      <Form.Group>
        <Form.Input
          label="First name"
          placeholder="First Name"
          width={6}
        />
        <Form.Input
          label="Middle Name"
          placeholder="Middle Name"
          width={4}
        />
        <Form.Input
          label="Last Name"
          placeholder="Last Name"
          width={6}
        />
      </Form.Group>
      <Form.Group>
        <Form.Input placeholder="2 Wide" width={2} />
        <Form.Input placeholder="12 Wide" width={12} />
        <Form.Input placeholder="2 Wide" width={2} />
      </Form.Group>
      <Form.Group>
        <Form.Input placeholder="8 Wide" width={8} />
        <Form.Input placeholder="6 Wide" width={6} />
        <Form.Input placeholder="2 Wide" width={2} />
      </Form.Group>
    </Form>
 */
