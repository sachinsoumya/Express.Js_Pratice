const express = require("express");

const { verifyUser, userAuth } = require("./middleware/auth");

const app = express();

app.use(express.json());
app.use("/static" ,express.static("public"));

function logger(req, res, next) {
  // console.log(req);
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
}

// app.use(logger);

// app.use("/" , (req,res,next)=>{
//      console.log("This is middleware")
//     next();
// })

app.get("/", (req, res, next) => {
  //   res.send("Hello world Sachin! Express is running🚀");
  console.log("Hello world Sachin! Express is running🚀");
  next();
});

app.get("/", (req, res) => {
  res.send("This is get number 2 for middleware");
});

app.get("/about", (req, res) => {
  res.send("This is about route");
});

app.get("/contact", (req, res) => {
  res.send("This is contact route");
});

app.get("/user/:id", (req, res) => {
  res.send("This is user route" + " " + req.params.id); //* Route parameters
});

app.post("/users", (req, res) => {
  const user = req.body;
  res.send(`user created : ${user.name}`); //* Post request passing data through request body.
});

app.get("/search", (req, res) => {
  res.send("Searching for name" + " " + req.query.name + " " + req.query.age); //* Query parameters
});

app.use("/profile", verifyUser, (req, res, next) => {
  // res.send("./profile");
  console.log("./profile");
  next();
}); //TODO - verifyUser is the middleware function.

app.get("/profile/analytics", (req, res, next) => {
  console.log("Thi is profile analytics data");
  res.send("response for profile analytic data");
});

app.use("/profile/bio", (req, res, next) => {
  console.log("This is profile bio information");
  // res.send("response for bio data");
  next();
});

app.get("/profile/bio/posts", (req, res, next) => {
  console.log("This is profile post information");
  res.send("response for bio-posts data");
});

app.use("/cust/system", userAuth); //TODO - HERE  userAuth is middleware In this way we can put middleware but remember it will be app.use()

app.get("/cust/system/profile", (req, res, next) => {
  console.log("user profile is being fetched");
  res.send("getting user profile data");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("something went wrong! contact to support"); //TODO - error handling middleware it doesn't work here
  }
});

app.post("/cust/system/applications", (req, res, next) => {
  // try { //TODO - If we use try catch here then error handling middleware will not work
  const data = req.body;
  console.log(data);
  if (!data.company) {
    throw new Error("company name is required");
  }
  console.log("user application is being checked" + " " + data.company);
  res.send("getting user applications" + " " + data.company);
  // } catch (err) {
  //   res.status(500).send("internal server error");
  // }
});

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send("something went wrong! contact to support"); //TODO - error handling middleware it works here not before the error happen
  }
});

app.get("/users/cart", userAuth, (req, res, next) => {
  console.log("Cart items");
  res.send("These are the cart items");
});

// app.get("/profile", verifyUser);

// app.get("/profile/getData" , (req,res)=>{
//   res.send("this is my profile data");
// })

//? Task -1

app.use((req, res, next) => {
  console.log("Auth check in progress...");

  const queryAdmin = req.query.admin;
  if (queryAdmin) {
    next();
  } else {
    res.status(401).send("Access denied. Admins only");
  }
});

app.get("/dashboard", (req, res, next) => {
  console.log("This is dashbard");
  res.send("Welcome to dashboard");
});



app.listen(5678, () => {
  console.log("server running on localhost:5678");
});


//* Serving static files


