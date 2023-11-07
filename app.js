'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Nama: Jessica Agatha Cesaria Yap \n')
    res.send('Nim: 51022009 \n')
    res.send('Jurusan: Sistem Informasi \n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
