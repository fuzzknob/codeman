import { ActionIcon, TextInput, TextInputProps } from '@mantine/core'
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5'

type SearchInputProps = {
  value: string
  onChange: (value: string) => void
} & Omit<TextInputProps, 'onChange'>

const SearchInput = ({
  value,
  onChange,
  size,
  ...restProps
}: SearchInputProps) => {
  return (
    <TextInput
      value={value}
      variant="transparent"
      onChange={({ target }) => onChange(target.value)}
      leftSection={<IoSearchOutline />}
      size={size}
      rightSection={
        <ActionIcon
          style={{ visibility: value ? 'visible' : 'hidden' }}
          variant="transparent"
          size={size}
          onClick={() => onChange('')}
        >
          <IoCloseOutline />
        </ActionIcon>
      }
      {...restProps}
    />
  )
}

export default SearchInput
