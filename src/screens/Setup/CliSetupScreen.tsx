import { Flex, Title, Button, Text, TextInput, ActionIcon } from '@mantine/core'
import { IoFolderOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const CliSetupScreen = () => {
  const navigate = useNavigate()

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      px="lg"
      pb={50}
      w="72%"
      mx="auto"
      h="100%"
    >
      <Title>Setup</Title>
      <Flex direction="column" justify="center" style={{ flexGrow: 1 }}>
        <Text size="sm" mb="lg">
          Codeman needs Visual Studio Code CLI to run. If it&#39;s not enabled,
          Please enable it by following these{' '}
          <a
            target="_blank"
            className="underline text-blue-highlight"
            href="https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line"
            rel="noreferrer"
          >
            steps
          </a>{' '}
          and enter the path to the CLI executable below
        </Text>
        <TextInput
          variant="filled"
          placeholder="Path to the Visual Studio Code CLI executable"
          size="xs"
          rightSection={
            <ActionIcon variant="subtle">
              <IoFolderOutline />
            </ActionIcon>
          }
        />
      </Flex>
      <Flex justify="center">
        <Button size="xs" onClick={() => navigate('/setup/git')}>
          Continue
        </Button>
      </Flex>
    </Flex>
  )
}

export default CliSetupScreen
