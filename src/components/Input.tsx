import React from 'react'

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  setValue?: (value: string) => void
}

const Input: React.FC<InputProps> = ({
  setValue,
  className,
  children,
  ...props
}) => {
  const spacing = children ? 'pl-4 pr-1 py-1' : 'px-4 py-2'
  return (
    <div
      className={`${
        className || ''
      } bg-secondary dark:bg-secondary-dark ${spacing} rounded-md flex`}
    >
      <input
        className="w-full outline-none bg-secondary placeholder-color-gray dark:bg-secondary-dark dark:text-color-white dark:placeholder-color-dark-gray"
        onChange={(e) => setValue && setValue(e.target.value)}
        type="text"
        {...props}
      />
      {children}
    </div>
  )
}

export default Input
