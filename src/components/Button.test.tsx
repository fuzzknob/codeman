import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('<Button />', () => {
  it('should render the children', () => {
    render(<Button>Test Button</Button>)
    const button = screen.getByRole('button', { name: /Test Button/i })
    expect(button.textContent).toBe('Test Button')
  })

  it('should set the color scheme to primary by default', () => {
    render(<Button>Primary Button</Button>)
    const button = screen.getByRole('button', { name: /Primary Button/i })
    expect(button.className).toContain(
      'bg-primary hover:bg-secondary dark:bg-primary-dark dark:hover:bg-secondary-dark text-color-dark dark:text-color-white',
    )
  })

  it('should change the color scheme to blue', () => {
    render(<Button scheme="blue">Blue Button</Button>)
    const button = screen.getByRole('button', { name: /Blue Button/i })
    expect(button.className).toContain(
      'bg-blue hover:bg-blue-highlight text-color-white',
    )
  })

  it('should change the button shape to square', () => {
    render(<Button shape="square">s</Button>)
    const button = screen.getByRole('button', { name: /s/i })
    expect(button.className).toContain('p-2')
    expect(button.className).not.toContain('px-5 py-1')
  })

  it('should be disabled when disabled prop is passed', () => {
    render(<Button disabled>disabled button</Button>)
    const button = screen.getByRole('button', { name: /disabled button/i })
    expect(button).toBeDisabled()
  })

  it('should show loader when loading', () => {
    render(<Button loading>Loading Button</Button>)
    const loader = screen.getByRole('loader')
    expect(loader).toBeInTheDocument()
  })

  it('should be disabled when loading', () => {
    render(<Button loading>Loading Button</Button>)
    const button = screen.getByRole('button', { name: /Loading Button/i })
    expect(button).toBeDisabled()
  })
})
