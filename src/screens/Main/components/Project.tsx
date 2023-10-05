import { Flex, Box, Text, ActionIcon } from '@mantine/core'
import { IoCloseOutline } from 'react-icons/io5'
import classes from './Project.module.css'

const Project = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      className={classes.project}
      px={16}
      py={8}
      mb={8}
    >
      <Box>
        <Text fz={15}>Codeman</Text>
        <Text fz={11} c="gray.6">
          ~/Project/Coding/Codeman
        </Text>
      </Box>
      <ActionIcon variant="subtle">
        <IoCloseOutline />
      </ActionIcon>
    </Flex>
  )
}

export default Project
