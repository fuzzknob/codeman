import React from 'react'
import GitSetup from './GitSetup'

const SetupScreen: React.FC = () => {
  return (
    <section className="pt-5 pb-14 w-7/12 flex-1 mx-auto flex flex-col justify-between">
      <h1 className="text-2xl text-center">Setup</h1>
      {/* <Cli /> */}
      <GitSetup />
    </section>
  )
}

export default SetupScreen
