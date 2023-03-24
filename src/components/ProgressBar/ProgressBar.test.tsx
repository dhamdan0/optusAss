import React from 'react'
import { render, screen } from '@testing-library/react'
import ProgressBar from './ProgressBar'

function testComponentWithProps (progress: number) {
  const container = render(
      <ProgressBar progress={progress}/>)
  expect(container).toMatchSnapshot()
}

describe('ProgressBar', () => {
  it('renders progress bar when exceed 100', () => {
    testComponentWithProps(200)
    const value = screen.getByText(/200 %/i)
    expect(value.parentElement).toHaveClass('progressBar--error')
  })

  it('renders progress bar when less that 0', () => {
    testComponentWithProps(-25)
    const zero = screen.getByText(/0 %/i)
    expect(zero).toBeInTheDocument()
  })

  it('renders progress bar when 100', () => {
    testComponentWithProps(100)
  })

  it('renders progress bar when 50', () => {
    testComponentWithProps(50)
  })
})
