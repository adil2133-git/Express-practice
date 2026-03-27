const express = require("express")
const app = express()

const m1 = (req,res,next) => {
    console.log("Middleware 1")
    next()
}

const m2 = (req,res,next) => {
    console.log("Middleware 2")
    next()
}

const m3 = (req,res,next) => {
    console.log("Middleware 3")
    next()
}

app.get("/", m1, m2, m3, (req,res) => {
    res.send("Home page")
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})