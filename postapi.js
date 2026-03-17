const express = require("express")
const app = express()

app.use(express.json())

app.post("/adduser", (req,res) => {
    const name = req.body.name
    const age = req.body.age

    res.send("User " + name + "age" + age + " added")
})


app.listen(3000, () => {
    console.log("Server running on port 3000")
})