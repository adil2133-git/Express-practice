const express = require("express")
const app = express()

app.use(express.json())

let user = {
    name : "Adil"
}

app.put("/update", (req,res) => {
    user.name = req.body.name
    res.send("User updated")
})

app.get("/user", (req,res) => {
    res.json(user)
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})