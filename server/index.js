const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://rahamat:mw51V4tU4Bo0Z9xT@cluster0.jph6wxy.mongodb.net/mernF1?retryWrites=true&w=majority"
);

app.get("/getUsers",(req,res)=>{
    UserModel.find({}).then(docs => {
        res.json(docs);
    }).catch(err => {
        res.json(err);
    });
});

app.post("/createUser", async (req, res)=>{
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(user);
});

app.listen(3001, ()=>{
    console.log("Server runs perfectly");
})