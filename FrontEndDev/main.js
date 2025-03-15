// https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app
const { app, BrowserWindow } = require('electron/main')
// app, controls the application lifecycle // BrowserWindow, creates and manages app windows

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})



console.log('Hello from Electron') // "start": "electron ." finds main.js and runs it