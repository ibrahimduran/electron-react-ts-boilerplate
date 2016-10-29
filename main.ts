const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width:800,
    height: 600,
    autoHideMenuBar: true,
  });

  /**
   * Entry point for application.
   */
  win.loadURL(`file://${__dirname}/index.html`);

  /**
   * React Developer Tools Extension
   */
  BrowserWindow.addDevToolsExtension(`${__dirname}/../devtools/react`);

  win.on('closed', () => {
    window = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (window === null) {
    createWindow();
  }
});
