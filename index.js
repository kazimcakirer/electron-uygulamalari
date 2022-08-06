const { app, BrowserWindow, Notification } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('index.html')
}


app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('active', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

function showNotification() {
    const notification = {
        title: 'Basic Notification',
        body: 'Notification from the Main process'
    }
    new Notification(notification).show()
}
app.whenReady().then(createWindow).then(showNotification)
