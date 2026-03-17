const express = require("express")
const app = express()

const users = ["Adil","Zayaa","abubacker"]

app.delete("/delete/:name", (req,res) => {

    const name = req.params.name

    users = users.filter(user => user !== name)

    res.send("User deleted")
})

app.get("/users", (req,res) => {
    res.json(users)
})

app.listen(3000, () => {
    console.log("Serever running on port 3000")
})