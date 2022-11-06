const express = require("express")
const app = express()
const port = 3000 || process.env.PORT


module.exports = {
    app,
    port,
    express
}