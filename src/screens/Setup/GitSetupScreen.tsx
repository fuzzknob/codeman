import { Flex, Title, Button, Text, TextInput, ActionIcon } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { IoFolderOutline } from 'react-icons/io5'

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
          Codeman also needs git Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ullam eum iste ex architecto.
        </Text>
        <TextInput
          variant="filled"
          placeholder="Path to Git"
          size="xs"
          rightSection={
            <ActionIcon variant="subtle">
              <IoFolderOutline />
            </ActionIcon>
          }
        />
      </Flex>
      <Flex justify="center">
        <Button size="xs" onClick={() => navigate('/')}>
          Done
        </Button>
      </Flex>
    </Flex>
  )
}

export default CliSetupScreen
