import React from 'react'
import TitleBar from './TitleBar'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { closeCurrentWindow } from '../services/app.service'

jest.mock('../services/app.service', () => ({
  closeCurrentWindow: jest.fn(),
}))

describe('<TitleBar />', () => {
  it('should close the window when the close button is pressed', () => {
    render(<TitleBar />)
    const button = screen.getByRole('close')
    userEvent.click(button)
    expect(closeCurrentWindow).toBeCalled()
  })
})
