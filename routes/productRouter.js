const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("product home page");
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`Product details for product with id: ${req.params.id}`);
});

router.post("/add" , (req,res)=>{
    const data = req.body;
    console.log(data);
    const {model , company , price , offer} = data;

    res.send(`Adding product : ${model} from ${company} priced at ${price} with offer ${offer}`);

   
})

module.exports = router;
