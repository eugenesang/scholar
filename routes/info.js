const express = require("express");
const router = express.Router();
const Comment= require("../models/comment");
const mongoose =require("mongoose");
router.use(express.urlencoded({extended:true}));

router.post("/comment", (req, res)=>{
  let comment=new Comment(req.body);
  comment.save()
  .then(r=>{
    console.log(r);
    res.redirect("/");
  })
  
})
router.get("/help", (req, res) => {
    res.render("help", { title: "Help Desk" })
})
router.get('/contact', (req, res) => {
    res.render("contact", { title: "contact Us" })
});

router.get("/about", (req, res) => {

    res.render("about", { title: "About Us" })
});






module.exports = router;
