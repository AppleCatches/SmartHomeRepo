# SmartHomeRepo
Testing Page

Follow these steps, some of these files are on my personal computer (windows) so you will have to build your own

HOW TO INSTALL ELECTRON.JS

WINDOWS POWERSHELL

npm -v
Get-ExecutionPolicy -List
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned

Get-ExecutionPolicy -List
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

npm -v

fnm install 23.10.0
fnm use 23.10.0
fnm env

$env:PATH = "C:\Users\denis\AppData\Local\fnm_multishells\47172_1742001699343;C:\Users\denis\AppData\Local\fnm_multishells\72176_1742001668298;C:\Program Files\Common Files\Oracle\Java\javapath;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\tools\opencv\build\x64\vc16\lib\bin;C:\tools\opencv\build\x64\vc16\bin;C:\Program Files\CMake\bin;C:\ProgramData\chocolatey\bin;C:\tools\SFML-2.6.1-windows-vc17-64-bit\SFML-2.6.1\bin;C:\Program Files\Microchip\xc8\v2.36\bin;C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\;C:\Program Files\dotnet\;C:\Program Files\HP\HP One Agent;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\Program Files\Git\cmd;C:\Program Files\nodejs\;C:\Users\denis\AppData\Local\Programs\Python\Python313\Scripts\;C:\Users\denis\AppData\Local\Programs\Python\Python313\;C:\Users\denis\AppData\Local\Microsoft\WindowsApps;C:\Users\denis\AppData\Local\JetBrains\PyCharm 2023.2.5\bin;C:\Users\denis\AppData\Local\JetBrains\CLion 2023.2.2\bin;C:\Users\denis\.dotnet\tools;C:\Program Files\JetBrains\IntelliJ IDEA 2024.3.2.2\bin;C:\Users\denis\AppData\Roaming\npm;C:\Users\denis\AppData\Local\Microsoft\WinGet\Packages\Schniz.fnm_Microsoft.Winget.Source_8wekyb3d8bbwe"

$env:FNM_MULTISHELL_PATH = "C:\Users\denis\AppData\Local\fnm_multishells\47172_1742001699343"

$env:FNM_VERSION_FILE_STRATEGY = "local"

$env:FNM_DIR = "C:\Users\denis\AppData\Roaming\fnm"

$env:FNM_LOGLEVEL = "info"

$env:FNM_NODE_DIST_MIRROR = "https://nodejs.org/dist"

$env:FNM_COREPACK_ENABLED = "false"

$env:FNM_RESOLVE_ENGINES = "true"

$env:FNM_ARCH = "x64"

WINDOWS KEY > Search: Edit the system environment variables
Environment Variables...
System Variables
New...

** Variable name:
fnm_PATH
** Variable value:
C:\Users\denis\AppData\Local\fnm_multishells\47172_1742001699343;C:\Users\denis\AppData\Local\fnm_multishells\72176_1742001668298;C:\Program Files\Common Files\Oracle\Java\javapath;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\tools\opencv\build\x64\vc16\lib\bin;C:\tools\opencv\build\x64\vc16\bin;C:\Program Files\CMake\bin;C:\ProgramData\chocolatey\bin;C:\tools\SFML-2.6.1-windows-vc17-64-bit\SFML-2.6.1\bin;C:\Program Files\Microchip\xc8\v2.36\bin;C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\;C:\Program Files\dotnet\;C:\Program Files\HP\HP One Agent;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\Program Files\Git\cmd;C:\Program Files\nodejs\;C:\Users\denis\AppData\Local\Programs\Python\Python313\Scripts\;C:\Users\denis\AppData\Local\Programs\Python\Python313\;C:\Users\denis\AppData\Local\Microsoft\WindowsApps;C:\Users\denis\AppData\Local\JetBrains\PyCharm 2023.2.5\bin;C:\Users\denis\AppData\Local\JetBrains\CLion 2023.2.2\bin;C:\Users\denis\.dotnet\tools;C:\Program Files\JetBrains\IntelliJ IDEA 2024.3.2.2\bin;C:\Users\denis\AppData\Roaming\npm;C:\Users\denis\AppData\Local\Microsoft\WinGet\Packages\Schniz.fnm_Microsoft.Winget.Source_8wekyb3d8bbwe

** Variable name:
FNM_MULTISHELL_PATH
** Variable value:
C:\Users\denis\AppData\Local\fnm_multishells\47172_1742001699343

** Variable name:
FNM_VERSION_FILE_STRATEGY
** Variable value:
local

** Variable name:
FNM_DIR 
** Variable value:
C:\Users\denis\AppData\Roaming\fnm

** Variable name:
FNM_LOGLEVEL 
** Variable value:
info

** Variable name:
FNM_NODE_DIST_MIRROR 
** Variable value:
https://nodejs.org/dist

** Variable name:
FNM_COREPACK_ENABLED 
** Variable value:
false

** Variable name:
FNM_RESOLVE_ENGINES 
** Variable value:
true

** Variable name:
FNM_ARCH 
** Variable value:
x64

WINDOWS POWERSHELL

fnm list-remote
** scroll to bottom = latest version
fnm use 23.10.0
node -v

npm install electron
npm fund
npm install -g npm@lastest
npm -v








SET UP A DEVELOPMENT ENVIORNMENT

GITHUB
Create Repository
Title: SmartHomeRepo
Description: Testing Page
README.md

DOWNLOAD Visual Studio Code
OPEN VS Code app
KEEP Welcome Page
Show welcome page on startup

select: Extensions (Ctrl+Shift+X)
install: JSON Server, GitHub Repositories

select: Explorer (Ctrl+Shift+E)
OPEN Welcome Page
Connect to...
Open Remote Repository
Open Repository from GitHub
Sign in
Connect to...
Open Remote Repository
Open Repository from GitHub
Sign in
Select SmartHomeRepo

COMMAND PROMPT
mkdir	SmartHomeWebApp
cd	C:\Users\denis\OneDrive\Desktop\fgcu\Computer Security Project\SmartHomeWebApp
npm	init

package name: (SmartHomeWebApp) ENTER
version: (1.0.0) ENTER
description: WebPage
entry point: (index.js) main.js
test command: echo \"Error: no test specified\" && exit 1
git repository: ENTER
keywords: smart home web app
author: Denise Pierre
license: (ISC) UNLICENSED
type: (commonjs) ENTER

Is this OK? (yes) ENTER

OPEN Visual Studio Code app
OPEN Welcome Page
Open Folder...
SmartHomeWebApp

OPEN file package.json
"scripts": {
    "start": "electron .",
    "test": "echo \\\"Error: no test specified\\\" && exit 1"
  },

CREATE file main.js
console.log('Hello from Electron') // "start": "electron .", finds main.js and runs it

COMMAND PROMPT
cd	C:\Users\denis\OneDrive\Desktop\fgcu\Computer Security Project\SmartHomeWebApp
npm 	install electron --save-dev
npm	init

package name: electron_smarthome
version: ENTER
git repo: ENTER
license: ENTER
type: ENTER

Is this OK? (yes) ENTER

npm	run start
"Hello from Electron"

OPEN Visual Studio Code app
Open file main.js

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

CREATE file index.html 

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self'"
    />
    <meta
      http-equiv="X-Content-Security-Policy"
      content="default-src 'self'; script-src 'self'"
    />
    <title>Hello from Electron renderer!</title>
  </head>
  <body>
    <h1>Hello from Electron renderer!</h1>
    <p>👋</p>
    <p id="info"></p>
  </body>
  <script src="https://www.example.com/renderer.js"></script>
</html>


Run and Debug (Ctrl+Shift+D)
To customize Run and Debug CREATE a launch.json file

{
    "version": "0.2.0",
    "compounds": [
      {
        "name": "Main + renderer",
        "configurations": ["Main", "Renderer"],
        "stopAll": true
      }
    ],

    "configurations": [        
      {
        "name": "Renderer",
        "port": 9222,
        "request": "attach",
        "type": "chrome",
        "webRoot": "C:\\Users\\denis\\OneDrive\\Desktop\\fgcu\\Computer Security Project\\SmartHomeWebApp"
      },
      {
        "name": "Main",
        "type": "node",
        "request": "launch",
        "cwd": "C:\\Users\\denis\\OneDrive\\Desktop\\fgcu\\Computer Security Project\\SmartHomeWebApp",
        "runtimeExecutable": "C:\\Users\\denis\\OneDrive\\Desktop\\fgcu\\Computer Security Project\\SmartHomeWebApp\\node_modules\\.bin\\electron",
        "windows": {
          "runtimeExecutable": "C:\\Users\\denis\\OneDrive\\Desktop\\fgcu\\Computer Security Project\\SmartHomeWebApp\\node_modules\\.bin\\electron.cmd"
        },
        "args": [".", "--remote-debugging-port=9222"],
        "outputCapture": "std",
        "console": "integratedTerminal"
      }
    ]
  }

NAVIGATE to lower right corner
Select START JSON SERVER
Started JSON Server: ...
OPEN

OPEN file index.html 
Run and Debug (Ctrl+Shift+D)
START Debugging (F5)
Main + renderer



RESOURCES
https://nodejs.org/en/download
https://www.google.com/search?q=set+up+a+development+environment+with+electron+js&rlz=1C1VIQF_enUS1085US1085&oq=set+up+a+development+environment+with+electron+js&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yDQgCEAAYhgMYgAQYigUyDQgDEAAYhgMYgAQYigUyCggEEAAYogQYiQUyCggFEAAYgAQYogQyCggGEAAYogQYiQUyCggHEAAYogQYiQXSAQg4NDU2ajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8
https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app
https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP
https://content-security-policy.com/default-src/#:~:text=The%20default%2Dsrc%20Content%20Security,style%2Dsrc%20%2C%20etc.)
https://www.w3schools.com/Tags/att_meta_http_equiv.asp
