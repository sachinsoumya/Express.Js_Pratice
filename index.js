const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world Sachin! Express is running🚀");
});

app.get("/about" , (req,res)=>{
    res.send("This is about route")
});

app.get("/contact" , (req,res)=>{
    res.send("This is contact route");
})

app.get("/user/:id" , (req,res)=>{
    res.send("This is user route" + " "+req.params.id); //* Route parameters
});

app.post("/users" , (req,res)=>{
    const user = req.body;
    res.send(`user created : ${user.name}`); //* Post request passing data through request body.
})

app.get("/search" , (req,res)=>{
    res.send("Searching for name" + " "+req.query.name + " "+req.query.age); //* Query parameters 
})

app.listen(5678, () => {
  console.log("server running on localhost:5678");
});
