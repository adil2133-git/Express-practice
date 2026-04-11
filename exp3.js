const express = require("express")
const req = require("express/lib/request")
const app = express()

app.get("/search",(req,res) => {
    const name = req.query.name
    res.end(`Hello ${name}`)
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})