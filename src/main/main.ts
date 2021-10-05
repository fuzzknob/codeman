import { app, BrowserWindow } from 'electron'

let mainWindow: BrowserWindow | null = null

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  })
  await mainWindow.loadURL('http://localhost:3000/index.html')
}

app.whenReady().then(createWindow).catch(console.log)
