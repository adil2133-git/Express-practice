const express = require("express")
const app = express()

app.get("/user/:id", (req,res) => {
    const id = req.params.id
    res.send("User ID is " + id)
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})