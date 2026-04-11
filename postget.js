const express = require("express")
const app = express()

app.use(express.json())

let users = []

app.post("/adduser", (req,res) => {
    const name = req.body.name
    const age = req.body.age
console.log("gate___________________________________1")
    users.push({name,age})
console.log("gate___________________________________2")

    res.send("User" + name + " age" + age + " added")
console.log("gate___________________________________3")

})

app.get("/users",(req,res) => {
    res.json(users)
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})