import React from 'react'
import { withVisible } from './helpers/withVisible'

interface ModalProps {
  visible: boolean
  action?: React.ReactNode
  children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ children, action }) => {
  return (
    <div className="fixed inset-0 z-50 bg-secondary-dark bg-opacity-25 backdrop-filter backdrop-blur-sm flex-center">
      <div
        className="bg-primary dark:bg-primary-dark rounded-md"
        style={{ width: '470px' }}
      >
        <div className="p-8 pb-6">{children}</div>
        <div className="px-8 pb-5">{action && action}</div>
      </div>
    </div>
  )
}

export default withVisible<ModalProps>(Modal)
