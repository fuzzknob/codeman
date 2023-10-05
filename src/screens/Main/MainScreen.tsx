import { useState } from 'react'
import { ActionIcon, Group, Box, Space, Flex } from '@mantine/core'
import {
  IoFolderOutline,
  IoGitBranchOutline,
  IoSettingsOutline,
} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import SearchInput from '@/components/SearchInput'

import Project from './components/Project'

const MainScreen = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  return (
    <Flex
      direction="column"
      px="xl"
      py="xs"
      h="100%"
      style={{ overflow: 'auto' }}
    >
      <Group justify="space-between">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Search Projects"
        />
        <Group>
          <ActionIcon variant="subtle" onClick={() => navigate('/setup/cli')}>
            <IoSettingsOutline size={18} />
          </ActionIcon>
          <ActionIcon variant="subtle">
            <IoGitBranchOutline size={18} />
          </ActionIcon>
          <ActionIcon variant="subtle">
            <IoFolderOutline size={18} />
          </ActionIcon>
        </Group>
      </Group>
      <Space h={20} />
      <Box style={{ overflow: 'auto' }} h="100%">
        <Project />
        <Project />
        <Project />
      </Box>
    </Flex>
  )
}

export default MainScreen
