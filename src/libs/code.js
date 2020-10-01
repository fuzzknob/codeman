import { exec } from 'child_process'
import { generateUid } from '../libs/utils'
import { capitalize } from 'lodash'
import electron from 'electron'

export function openCode(directoryPath) {
  return new Promise((res, rej) => {
    exec(`/usr/local/bin/code ${directoryPath}`, (error) => {
      if (error) {
        rej(error)
        return
      }
      res('')
    })
  })
}

function getProjectName(directoryPath) {
  const splitted = directoryPath.split('/')
  const projectName = splitted[splitted.length - 1]
  return projectName.split(/[-|_]/gm).map(node => capitalize(node)).join(' ')
}

export async function openProjectDirectory() {
  const { dialog } = electron.remote
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ['openDirectory'],
  })
  if (canceled || !filePaths.length) return
  const directoryPath= filePaths[0]
  return {
    id: generateUid(16),
    name: getProjectName(directoryPath),
    path: directoryPath,
  }
}

export function closeWindow() {
  const { app } = electron.remote
  app.quit()
}
