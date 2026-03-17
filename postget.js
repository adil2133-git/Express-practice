const express = require("express")
const app = express()

app.use(express.json())

let users = []

app.post("/adduser", (req,res) => {
    const name = req.body.name
    const age = req.body.age

    users.push({name,age})

    res.send("User" + name + " age" + age + " added")
})

app.get("/users",(req,res) => {
    res.json(users)
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})