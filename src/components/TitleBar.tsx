import { Flex, ActionIcon } from '@mantine/core'
import { IoCloseOutline } from 'react-icons/io5'
import { closeCurrentWindow } from '@/services/app-service'

const TitleBar = () => {
  async function handleClose() {
    await closeCurrentWindow()
  }

  return (
    <Flex data-tauri-drag-region p={12}>
      <ActionIcon
        variant="transparent"
        onClick={handleClose}
        aria-label="close"
      >
        <IoCloseOutline
          className="text-color-dark-gray hover:text-color-dark dark:text-color-gray dark:hover:text-color-white"
          size={20}
        />
      </ActionIcon>
    </Flex>
  )
}

export default TitleBar
