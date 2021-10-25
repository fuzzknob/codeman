import React from 'react'
import Modal from './Modal'
import { render, screen } from '@testing-library/react'

describe('<Modal />', () => {
  it('should be visible when visible prop is true', () => {
    render(<Modal visible={true} />)
    const modal = screen.getByRole('dialog')
    expect(modal).toBeInTheDocument()
  })

  it('should be hidden when visible prop is false', () => {
    render(<Modal visible={false} />)
    const modal = screen.queryByRole('dialog')
    expect(modal).not.toBeInTheDocument()
  })

  it('should render children', () => {
    render(
      <Modal visible={true}>
        <>Test Child</>
      </Modal>,
    )
    const child = screen.getByText('Test Child')
    expect(child).toBeInTheDocument()
  })

  it('should render actions', () => {
    render(<Modal visible={true} action={<>Test Action</>} />)
    const action = screen.getByText('Test Action')
    expect(action).toBeInTheDocument()
  })
})
