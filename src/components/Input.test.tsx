import React from 'react'
import Input from './Input'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('<Input />', () => {
  it('should show passed value', () => {
    render(<Input value="Test" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('value', 'Test')
  })

  it('should fire event on text input', () => {
    const onChange = jest.fn()
    render(<Input setValue={onChange} />)
    const input = screen.getByRole('textbox')
    userEvent.type(input, 'Test')
    expect(onChange).toBeCalled()
    expect(onChange).toBeCalledTimes(4)
    expect(onChange).toBeCalledWith('Test')
  })

  it('should render label', () => {
    render(<Input label="Test Label" />)
    const input = screen.getByLabelText('Test Label')
    expect(input).toBeInTheDocument()
  })

  it('should render child element', () => {
    render(
      <Input>
        <>Test Child</>
      </Input>,
    )
    const child = screen.getByText('Test Child')
    expect(child).toBeInTheDocument()
  })
})
