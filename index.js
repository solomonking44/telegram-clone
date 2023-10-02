const { app, BrowserWindow } = require('electron')
const path = require('path')

// API BUSINESS //

// const express = require('express')
// const api = express()
// var http = require('http')

// api.get('/', (req, res) => {
//     res.end("Hello world!")
// })


// api.post('/', (req, res) => {
//     var
//         response = {
//             time: req.body.time,
//             message: req.body.message
//         }
//     res.end(JSON.stringify(response))
// })

// api.listen(3000)

// API BUSINESS //


const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 624,
        minWidth: 800,
        minHeight: 624,
        minimizable: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        },
        frame: false,
        titleBarStyle: 'hidden'
    })

    window.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows() == 0) createWindow()
    })
})


app.on('window-all-closed', () => {
    if (process.platform == 'darwin') app.quit()
})