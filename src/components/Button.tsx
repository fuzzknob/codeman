import React, { ButtonHTMLAttributes } from 'react'
import { VscLoading } from 'react-icons/vsc'
import { Scheme } from '../utils/style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  scheme?: Scheme
  shape?: 'normal' | 'square'
  loading?: boolean
}

const schemeStyles = {
  primary:
    'bg-primary hover:bg-secondary dark:bg-primary-dark dark:hover:bg-secondary-dark text-color-dark dark:text-color-white',
  secondary:
    'bg-secondary dark:bg-secondary-dark text-color-gray hover:bg-tertiary dark:hover:bg-tertiary-dark',
  tertiary:
    'bg-tertiary dark:bg-tertiary-dark text-color-dark dark:text-color-white',
  blue: 'bg-blue hover:bg-blue-highlight text-color-white',
}

const Button: React.FC<ButtonProps> = ({
  children,
  scheme,
  shape,
  className,
  loading,
  disabled,
  ...props
}) => {
  const padding = shape === 'square' ? 'p-2' : 'px-5 py-1'
  const colors = schemeStyles[scheme || 'primary']
  return (
    <button
      disabled={disabled || loading}
      className={`${
        className || ''
      } ${colors} ${padding} relative rounded-md disabled:opacity-60`}
      {...props}
    >
      {loading ? (
        <div className="position-center">
          <VscLoading role="loader" className="animate-spin" />
        </div>
      ) : null}
      <span className={`${loading ? 'invisible' : ''}`}>{children}</span>
    </button>
  )
}

export default Button
