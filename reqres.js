const express = require("express")
const app = express()

app.use(express.json())

app.post("/users",(req,res) => {
    const name = req.body.name

    res.json({
        message: "User Created",
        name: name 
    })
})

app.get("/users",(req,res) => {
    res.json({
        message: "List of users"
    })
   
})
app.listen(3001, () => {
    console.log("Server running")
})