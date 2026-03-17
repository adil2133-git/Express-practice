const express = require("express")
const app = express()

app.use(express.json())

app.post("/login", (req,res) => {

    const username = req.body.username
    const password = req.body.password

    if(username === "adil" && password === "123"){
        res.send("login successfull")
    }else{
        res.send("invalid credentials")
    }
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})