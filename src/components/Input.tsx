import React from 'react'

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  setValue?: (value: string) => void
  label?: string
}

const Input: React.FC<InputProps> = ({
  setValue,
  className,
  children,
  label,
  ...props
}) => {
  const spacing = children ? 'pl-4 pr-1 py-1' : 'px-4 py-2'
  const inputId = label ? label.toLowerCase().split(' ').join('-') : null
  return (
    <div>
      {label ? (
        <div className="mb-2">
          <label htmlFor={inputId || ''} className="dark:text-color-white">
            {label}
          </label>
        </div>
      ) : null}
      <div
        className={`${
          className || ''
        } bg-secondary dark:bg-secondary-dark ${spacing} rounded-md flex`}
      >
        <input
          id={inputId || undefined}
          className="w-full outline-none bg-secondary placeholder-color-gray dark:bg-secondary-dark dark:text-color-white dark:placeholder-color-dark-gray"
          onChange={(e) => setValue && setValue(e.target.value)}
          type="text"
          {...props}
        />
        {children}
      </div>
    </div>
  )
}

export default Input
