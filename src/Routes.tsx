import React from 'react'
import SetupScreen from './screens/Setup/SetupScreen'
import { Routes as RouterRoutes, Route } from 'react-router-dom'

const Routes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<SetupScreen />} />
    </RouterRoutes>
  )
}

export default Routes
