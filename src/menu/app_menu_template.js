import { app } from "electron";
const prompt = require('electron-prompt');

const isMac = process.platform === 'darwin'

export const appMenuTemplate = {
  label: "App",
  submenu: [
    {
      label: "Location",
      accelerator: "CmdOrCtrl+L",
      click: (item, window, event) => {
        prompt({
          title: 'Prompt example',
          label: 'URL:',
          value: 'http://example.org',
          inputAttrs: {
            type: 'url'
          },
          type: 'input',
          alwaysOnTop:true,
        })
            .then((r) => {
              if(r === null) {
                console.log('user cancelled');
              } else {
                window.loadURL(r)
              }
            })
            .catch(console.error);
      }
    },
    {
      label: "Opacity",
      accelerator: "CmdOrCtrl+O",
      click: async (item, window, event) => {
        prompt({
          title: 'Change Opacity',
          label: 'Select Opacity for Window',
          value: window.opacity,
          inputAttrs: {
            type:'range',
            step:1,
            min:1,
            max:100,
          },
          type: 'input',
          alwaysOnTop:true,
        })
            .then((r) => {
              if(r === null) {
                console.log('user cancelled');
              } else {
                window.setOpacity(parseInt(r)/100)
              }
            })
            .catch(console.error);
      }
    },
    { type: 'separator' },
    {
      label: "Quit",
      accelerator: "CmdOrCtrl+Q",
      click: () => {
        app.quit();
      }
    },
  ]
}
export const editMenuTemplate = {
  label: "Edit",
  submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'pasteAndMatchStyle' },
      { role: 'delete' },
      { role: 'selectAll' },
      { type: 'separator' },
      {
        label: 'Speech',
        submenu: [
          { role: 'startSpeaking' },
          { role: 'stopSpeaking' }
        ]
      }
    ]

}
