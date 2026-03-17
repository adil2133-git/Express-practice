const express = require("express")
const app = express()

app.get("/product/:category/:id", (req,res) => {
    const category = req.params.category
    const id = req.params.id

    res.send("Category: " + category + " ID: " + id)
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})