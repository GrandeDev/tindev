const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const server = express()

mongoose.connect('mongodb+srv://username0:username0@cluster0.zludb.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})



server.use(express.json())
server.use(routes)
server.listen(3333)