import React from 'react'
import { Flex } from '@mantine/core'
import TitleBar from '@/components/TitleBar'
import { useColorScheme } from '@/hooks/useColorScheme'

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const scheme = useColorScheme()

  return (
    <Flex
      direction="column"
      bg={scheme === 'light' ? 'white' : 'dark.7'}
      h="100vh"
      style={{ borderRadius: '10px' }}
    >
      <TitleBar />
      {children}
    </Flex>
  )
}

export default MainLayout
