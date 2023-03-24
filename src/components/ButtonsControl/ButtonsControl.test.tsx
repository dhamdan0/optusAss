import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import ButtonsControl from './ButtonsControl'

const onClick = jest.fn()

function testComponentWithProps () {
  const container = render(
      <ButtonsControl
      onButtonClick={onClick}
      values={[1, -3, 4]} />
  )
  expect(container).toMatchSnapshot()
}

describe('ButtonsControl', () => {
  it('renders the component', () => {
    testComponentWithProps()
  })

  it('calls correct function on click, and positive numbers will have + sign', () => {
    const { getByText } = render(<ButtonsControl onButtonClick={onClick} values={[1]}/>)
    fireEvent.click(getByText('+1'))
    expect(onClick).toHaveBeenCalled()
  })
})
