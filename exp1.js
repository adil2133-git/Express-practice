const express = require("express")
const app = express()

app.get("/", (req,res) => {
    res.send("basic get method used")
})

app.get("/contact", (req,res) => {
    res.send("contact page")
})

app.get("/about", (req,res) => {
    res.send("abaout page")
})

app.listen(3000,() => {
    console.log("Server listening on port 3000")
})