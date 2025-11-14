const verifyUser = (req, res, next) => {
  const authToken = "xyz";
  console.log("Auth is being checked");
  const isVerified = authToken === "xyz";
  if (!isVerified) {
    res.status(401).send("Unauthorized user");
  } else {
    next();
  }
};


const userAuth = (req,res,next)=>{
  const authToken = "abc";
  console.log("Auth token is being checked");
  const isVerified = authToken ==="abc";

  if(!isVerified){
    res.send("Unauthorized user");
  }else{
    next();
  }

}


module.exports={verifyUser ,userAuth};