import React from 'react'
import TitleBar from './components/TitleBar'

const App = () => {
  return (
    <div className="bg-primary rounded-lg h-full select-none cursor-default dark:bg-primary-dark">
      <TitleBar />
      <h1>Hello</h1>
    </div>
  )
}

export default App
