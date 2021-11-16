const express =require("express");
const mongoose=require("mongoose");
const router= express.Router();
const Material=require("../models/material");

router.use(express.urlencoded({extended:true}))
router.post("",(req, res)=>{
  material=new Material(req.body);
  material.save()
  .then(r=>{
    
    console.log(r)
    res.redirect("/material");
    })
 .catch(err=> err)
  
})
;
router.get("",(req,res)=>{
  res.render("material")
});
module.exports = router;
