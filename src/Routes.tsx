import React from 'react'
import MainScreen from './screens/Main/MainScreen'
import SetupScreen from './screens/Setup/SetupScreen'
import { Routes as RouterRoutes, Route } from 'react-router-dom'

const Routes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/setup" element={<SetupScreen />} />
    </RouterRoutes>
  )
}

export default Routes
