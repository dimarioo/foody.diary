const express = require('express')
const cors = require('cors')


const app = express ()

const port = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))