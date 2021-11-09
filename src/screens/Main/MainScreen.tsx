import React from 'react'
import Button from '../../components/Button'
import { IoSearchOutline, IoGitBranch, IoFolderOutline } from 'react-icons/io5'

const Project: React.FC<{ name: string; path: string }> = ({ name, path }) => {
  return (
    <div className="px-4 py-2 hover:bg-secondary dark:hover:bg-secondary-dark rounded-lg cursor-pointer">
      <h1 className="text-lg">{name}</h1>
      <p className="text-sm text-color-gray dark:text-color-dark-gray">
        {path}
      </p>
    </div>
  )
}

const MainScreen: React.FC = () => {
  return (
    <section className="flex flex-col px-8 pb-8 h-full">
      <div className="flex justify-between">
        <Button shape="square">
          <IoSearchOutline size={18} />
        </Button>
        <div>
          <Button shape="square" className="mr-2">
            <IoGitBranch size={18} />
          </Button>
          <Button shape="square">
            <IoFolderOutline size={18} />
          </Button>
        </div>
      </div>
      <div className="mt-5 overflow-auto">
        <Project name="Codeman" path="~/Projects/codeman" />
        <Project name="Codeman" path="~/Projects/codeman" />
        <Project name="Codeman" path="~/Projects/codeman" />
        <Project name="Codeman" path="~/Projects/codeman" />
        <Project name="Codeman" path="~/Projects/codeman" />
        <Project name="Codeman" path="~/Projects/codeman" />
        <Project name="Codeman" path="~/Projects/codeman" />
        <Project name="Codeman" path="~/Projects/codeman" />
      </div>
    </section>
  )
}

export default MainScreen
