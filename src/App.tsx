import { MantineProvider } from '@mantine/core'
import Routes from './Routes'
import MainLayout from './layouts/MainLayout'

import '@mantine/core/styles.css'
import './global.css'

const App = () => {
  return (
    <MantineProvider>
      <MainLayout>
        <Routes />
      </MainLayout>
    </MantineProvider>
  )
}

export default App
