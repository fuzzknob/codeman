import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { IoFolderOutline } from 'react-icons/io5'

const GitSetup: React.FC = () => {
  return (
    <>
      <div className="mb-3">
        <p className="mb-4">
          Codeman also needs git Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ullam eum iste ex architecto.
        </p>
        <Input placeholder="Path to Git">
          <Button shape="square" scheme="secondary">
            <IoFolderOutline />
          </Button>
        </Input>
      </div>
      <div className="flex-center">
        <Button scheme="blue">Done</Button>
      </div>
    </>
  )
}

export default GitSetup
