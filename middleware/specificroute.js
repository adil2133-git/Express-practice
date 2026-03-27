const express = require("express")
const app = express()

const aboutMiddleware = (req,res,next) => {
    console.log("About middleware executed")
    next()
}

app.get("/about", aboutMiddleware, (req,res) => {
    res.send("About page")
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})