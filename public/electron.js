const { menubar } = require('menubar');

const path = require('path');
const isDev = require('electron-is-dev');

const mb = menubar({
  preloadWindow: true,
  index: isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`,
  browserWindow: {
    height: 500,
    width: 500,
    alwaysOnTop: isDev,
    webPreferences: {
      nodeIntegration: true
    }
  }
});

mb.on('ready', () => {
  if (isDev) {
    mb.window.webContents.openDevTools({mode: "detach"});
  }

  return mb.showWindow();
});