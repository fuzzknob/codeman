import fs from 'fs'
import path from 'path'
import os from 'os'

function getConfigDirPath() {
  let configPath = ''
  if (process.platform === 'darwin') {
    configPath = 'Library/Application Support/codeman/User'
  } else if (process.platform === 'linux') {
    configPath = '.config/codeman/User'
  }
  return path.join(os.homedir(), configPath)
}

export function writeFile(data) {
  return new Promise((resolve, reject) => {
    fs.open(data.path, data.flags, (err, fd) => {
      if (err) {
        return reject(err)
      }
      fs.writeFile(fd, new Uint8Array(Buffer.from(data.content)), writeErr => {
        if (writeErr) return reject(writeErr)
        fs.close(fd, closeErr => {
          if (closeErr) return reject(closeErr)
          resolve(data.path)
        })
      })
    })
  })
}

function checkConfigDirectory() {
  const configDir = getConfigDirPath()
  return new Promise((res, rej) => {
    fs.stat(configDir, (err) => {
      if (err) {
        fs.mkdir(configDir, { recursive: true, }, (err) => {
          if (err) return rej(err)
          res()
        })
        return
      }
      res()
    })
  })
}

export async function setProjectList(projects) {
  await checkConfigDirectory()
  const configDir = getConfigDirPath()
  return writeFile({
    content: JSON.stringify(projects, null, 2),
    path: path.join(configDir, 'projects.json'),
    flags: 'w',
  })
}

export function getProjectList() {
  const configDir = getConfigDirPath()
  return new Promise((res) => {
    fs.readFile(path.join(configDir, 'projects.json'), async (err, data) => {
      if (err) {
        await setProjectList([])
        return res([])
      }
      return res(JSON.parse(data))
    })
  })
}
