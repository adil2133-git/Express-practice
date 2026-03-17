const express = require("express")
const app = express()

const users = [
    {name: "Adil", age: 20},
    {name: "Zayaa", age: 18}
]

app.get("/users", (req,res) => {
    res.json(users)
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})