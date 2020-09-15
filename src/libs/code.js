import { exec } from 'child_process'

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