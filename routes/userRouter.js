const express = require('express');

const router = express.Router();

router.get("/" , (req,res)=>{
    res.send("User home page");
});

router.get("/:id" , (req,res)=>{
    const id = req.params.id;
    res.send(`User profile page for user with id : ${id}`);
})

router.post("/save", (req,res)=>{
    const data = req.body;
    console.log(data);
    res.send(`Creating user with name : ${data.name}`);
    // res.send("User created successfully");
    console.log(req);
});


module.exports=router;