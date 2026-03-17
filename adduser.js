const express = require("express")
const app = express()

app.use(express.json())

const users = []

app.post("/adduser", (req,res) => {
    const name = req.body.name

    users.push({name})

    res.send("User added")
})