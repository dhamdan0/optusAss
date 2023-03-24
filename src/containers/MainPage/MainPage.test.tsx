import React from 'react'
import { render, screen } from '@testing-library/react'
import MainPage from './MainPage'

jest.mock('../../components/SelectBox/SelectBox', () => 'SelectBox')
jest.mock('../../components/ButtonsControl/ButtonsControl', () => 'ButtonsControl')
jest.mock('../../components/ProgressBar/ProgressBar', () => 'ProgressBar')

function testComponentWithProps () {
  const container = render(<MainPage />)
  expect(container).toMatchSnapshot()
}

describe('MainPage', () => {
  it('renders page title', () => {
    render(<MainPage />)
    const header = screen.getByText(/Progress Bars/i)
    expect(header).toBeInTheDocument()
  })

  it('renders the component', () => {
    testComponentWithProps()
  })
})
