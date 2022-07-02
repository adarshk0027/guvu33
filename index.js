const express = require('express')
const app = express()
//const http = require('http');
const fs = require('fs')
const PORT = 8000
const DateNow = new Date()
app.get('/create-text', (req, res) => {

    const DATE = DateNow.toISOString().split(":");
    const Time = DateNow.getHours() + ":" + DateNow.getMinutes() + ":" + DateNow.getSeconds();
    fs.writeFile(`${DateNow.toDateString()}.txt`, DateNow.toString(), (err) => {
        if (err) {
            console.log(err);
        } else {
            return res.status(200).json({
                Message: "create file"
            })
        }
    })
})
app.get('/read', (req, res) => {
    fs.readFile(`${DateNow.toDateString()}.txt`, (err, d) => {
        if (err) {
            return res.status(400).json({
                err
            })
        } else {
            return res.status(200).json({
                data: d.toString()
            })
        }
    })
})

app.listen(PORT, () => {
    console.log("Port Is Connected");
})

