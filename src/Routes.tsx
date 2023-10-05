import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import MainScreen from '@/screens/Main/MainScreen'
import CliSetupScreen from '@/screens/Setup/CliSetupScreen'
import GitSetupScreen from '@/screens/Setup/GitSetupScreen'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainScreen />,
  },
  {
    path: '/setup/cli',
    element: <CliSetupScreen />,
  },
  {
    path: '/setup/git',
    element: <GitSetupScreen />,
  },
])

const Routes = () => {
  return <RouterProvider router={router} />
}

export default Routes
