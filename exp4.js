const express = require("express")
const app = express()

app.get("/user",(req,res) => {
    res.json({
        name:"adil",
        age:21,
        place:"kasaragod"
    })
}) 

app.listen(3000,() => {
    console.log("Server running on port 3000")
})