const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users")

mongoose.connect(
    "mongodb+srv://rahamat:mw51V4tU4Bo0Z9xT@cluster0.jph6wxy.mongodb.net/mernF1?retryWrites=true&w=majority"
);

app.get("/getUsers",(req,res)=>{
    // UserModel.find({}, (err, result)=>{
    //     if(err){
    //         res.json(err);
    //     }else{
    //         res.json(result);
    //     }
    // });
    UserModel.find({}).then(docs => {
        res.json(docs);
    }).catch(err => {
        res.json(err);
    });
});

app.listen(3001, ()=>{
    console.log("Server runs perfectly");
})