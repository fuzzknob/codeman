import React from 'react'
import Routes from './Routes'
import TitleBar from './components/TitleBar'

const App = () => {
  return (
    <div className="bg-primary dark:bg-primary-dark text-color-dark dark:text-color-white rounded-lg h-screen select-none cursor-default text-base flex flex-col">
      <TitleBar />
      <main className="h-full overflow-auto">
        <Routes />
      </main>
    </div>
  )
}

export default App
