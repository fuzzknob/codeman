import { exec } from 'child_process'
import electron from 'electron'
import { generateUid } from '../libs/utils'

export function openCode(directoryPath) {
  return new Promise((res, rej) => {
    exec(`code ${directoryPath}`, (error) => {
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
  return splitted[splitted.length - 1].toUpperCase()
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
