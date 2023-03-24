import React from 'react'
import { render } from '@testing-library/react'
import SelectBox from './SelectBox'

function testComponentWithProps (props?: any) {
  const container = render(<SelectBox
      options={[]}
      onChangeOption={ () => {}}
      selectedValue={0}
      {...props}
  />)
  expect(container).toMatchSnapshot()
}

describe('SelectBox', () => {
  it('renders the component when there are no options', () => {
    testComponentWithProps()
  })

  it('renders the component when there are options & wrong selected option', () => {
    testComponentWithProps({
      options: [{
        label: 'test 1',
        value: 1
      }],
      selectedValue: -1
    })
  })

  it('renders the component with happy case', () => {
    testComponentWithProps({
      options: [{
        label: 'test 1',
        value: 1
      }],
      selectedValue: 1
    })
  })
})
