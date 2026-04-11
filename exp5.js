const express = require("express")
const app = express()

app.use(express.json())

const users = []

app.post("/user",(req,res) => {
    users.push(req.body)
    res.send(`User ${req.body.name} added`)
})

app.get("/user",(req,res) => {
    res.json(users)
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})
