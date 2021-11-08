import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { IoFolderOutline } from 'react-icons/io5'

const CliSetup: React.FC = () => {
  return (
    <>
      <div className="mb-3">
        <p className="mb-4">
          Codeman needs Visual Studio Code CLI to run. If it&apos;s not enabled,
          Please enable it by following these{' '}
          <a
            target="_blank"
            className="underline text-blue-highlight"
            href="https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line"
            rel="noreferrer"
          >
            steps
          </a>{' '}
          and enter the path to the CLI executable below
        </p>
        <Input placeholder="Path to the Visual Studio Code CLI executable">
          <Button shape="square" scheme="secondary">
            <IoFolderOutline />
          </Button>
        </Input>
      </div>
      <div className="flex-center">
        <Button scheme="blue">Continue</Button>
      </div>
    </>
  )
}

export default CliSetup
