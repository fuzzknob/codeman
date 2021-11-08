import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { closeCurrentWindow } from '../services/app.service'

const TitleBar: React.FC = () => {
  async function handleClose() {
    await closeCurrentWindow()
  }

  return (
    <section data-tauri-drag-region className="flex p-3">
      <button
        role="close"
        tabIndex={-1}
        className="cursor-default"
        onClick={handleClose}
      >
        <IoCloseOutline
          className="text-color-dark dark:text-color-gray dark:hover:text-color-white"
          size={20}
        />
      </button>
    </section>
  )
}

export default TitleBar
