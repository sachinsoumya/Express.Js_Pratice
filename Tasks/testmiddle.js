const express = require('express');

const app = express();

app.use(express.json());

app.use((req,res,next)=>{
    console.log("Auth check in progress...");

     const queryAdmin = req.query.admin;
     if(queryAdmin){
        next();
     }else{
        res.status(401).send("Access denied. Admins only");
     }
})

app.get('/dashboard', (req,res,next)=>{
    console.log('This is dashbard');
    res.send('Welcome to dashboard');
})

app.listen(1234,()=>{
     console.log("server running on localhost:1234");
});

