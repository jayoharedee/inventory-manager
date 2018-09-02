import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'

class Details extends Component {
  state = {}

  getColor = () => {
    const map = [
      { key: 'line', value: 'line', text: 'Line' },
      { key: 'stick', value: 'stick', text: 'Stick' },
      { key: 'accessories', value: 'accessories', text: 'Dot' },
      { key: 'tau', value: 'tau', text: 'Tau' },
      { key: 'oat', value: 'oat', text: 'Oat' },
    ]

    return map
  }

  getClass = () => {
    const map = [
      { key: 'jewelery', value: 'jewelery', text: 'Jewelery' },
      { key: 'clothing', value: 'clothing', text: 'Clothing' },
      {
        key: 'accessories',
        value: 'accessories',
        text: 'Accessories',
      },
      { key: 'bags', value: 'bags', text: 'Bags' },
      { key: 'gifts', value: 'gifts', text: 'Gifts' },
    ]

    return map
  }

  getFamily = () => {
    const map = [
      { key: 'kh', value: 'KH', text: 'Kara Hamilton' },
      { key: 'hb', value: 'HB', text: 'Hoi Bo' },
    ]

    return map
  }

  getColorOptions = () => {
    const map = [
      { key: 'xs', value: 'XS', text: 'Extra Small' },
      { key: 'sm', value: 'SM', text: 'Small' },
      { key: 'md', value: 'MD', text: 'Medium' },
      { key: 'lg', value: 'LG', text: 'Large' },
    ]

    return map
  }

  render() {
    const sizeOptions = this.getColorOptions()
    const familyOptions = this.getFamily()
    const classOptions = this.getClass()
    const colorOptions = this.getColor()

    return (
      <Form size="tiny">
        <Form.Group>
          <Form.Input label="Item #" placeholder="Item #" />
          <Form.Input
            label="Primary Vendor"
            placeholder="Primary Vendor"
          />
          <Form.Select
            label="Size"
            options={sizeOptions}
            placeholder="Size"
          />
          <Form.Select
            label="Family"
            options={familyOptions}
            placeholder="Family"
          />
        </Form.Group>
        <Form.Group>
          <Form.Select
            label="Class"
            options={classOptions}
            placeholder="Class"
          />
          <Form.Select
            label="Color"
            options={classOptions}
            placeholder="Color"
          />
          <Form.Input
            icon="dollar"
            iconPosition="left"
            label="Sell Price"
            placeholder="Sell Price"
          />
          <Form.Input
            icon="dollar"
            iconPosition="left"
            label="Cost Price"
            placeholder="Cost Price"
          />
        </Form.Group>
        <TextArea
          autoHeight
          placeholder="Try adding multiple lines"
          rows={2}
        />
      </Form>
    )
  }
}

export default Details

/**
 * <Form>
        <Form.Group>
          <Form.Input label="Item #" placeholder="Item #" width={2} />
          <Form.Input
            label="Primary Vendor"
            placeholder="Primary Vendor"
            width={4}
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
