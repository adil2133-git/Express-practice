const express = require("express")
const app = express()

app.use(express.json())

let users = []

app.post("/users",(req,res) => {
    const {name, age} = req.body

    const newUser = ({
        id: users.length + 1,
        name,
        age
    })

    users.push(newUser)

    res.status(201).json({
        message: "Use created successfully",
        user: newUser
    })
})

app.get("/users", (req,res) => {
    // const user = users[users.length - 1]
    // res.send(`${user.age} year old ${user.name}`)
    res.send(users)
})

app.get("/users/:id", (req,res) => {
    const id = parseInt(req.params.id)
    

    const user = users.find(u => u.id === id)

    if(!user){
        return res.status(404).json({message: "User not found"})
    }

    res.send(`${user.age} year old ${user.name}`)
})

app.put("/users/:id",(req,res) => {
    const id = parseInt(req.params.id)
    
    const index = users.findIndex(u => u.id === id)

    if(index === -1){
        return res.status(404).json({message: "User not found"})
    }

    users[index] = {
        id:id,
        ...req.body
    }

    res.json(users[index])

})

app.patch("/users/:id",(req,res) => {
    const id = parseInt(req.params.id)

    const user = users.find(u => u.id === id)

    if(!user){
        return res.status(404).json({message: "User not found"})
    }

    const {name,age} = req.body

    if(name !== undefined) user.name = name;
    if(age !== undefined) user.age = age

    res.json({
        message: "User updated successfully",
        user: user
    })
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})