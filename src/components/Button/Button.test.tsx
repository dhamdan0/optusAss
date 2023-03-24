import React from 'react'
import { render } from '@testing-library/react'
import Button from './Button'

function testComponentWithProps () {
  const container = render(<Button
      label="Hello" onClick={() => {}}
    />)
  expect(container).toMatchSnapshot()
}

describe('Button', () => {
  it('renders the component', () => {
    testComponentWithProps()
  })
})
