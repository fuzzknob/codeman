import React, { useState } from 'react'

const App = () => {
  const [msg, setMsg] = useState('hello')

  return (
    <div>
      <h1 className="text-2xl text-red-500">{msg}</h1>
      <input
        type="text"
        onChange={(e) => {
          setMsg(e.target.value)
        }}
      />
    </div>
  )
}

export default App
