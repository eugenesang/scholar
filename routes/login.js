url = require('url');

const mongoose=require("mongoose");
const express = require('express');
const router = express.Router();
const Student= require("../models/students");
const Material= require("../models/material");
const compare= require("../models/searchengine");
router.use(express.urlencoded({ extended: true }))


router.post('/stud', (req, res) => {
    
Student.find()
.then(re=>{


const student= req.body
  
  for(stud of re){
    if(stud.email==student.email && stud.password==student.password){
      res.render('loggedin', {
        student: stud,
        info: stud,
        title: "Login"
    });    
    return;
    }
  }
  
res.redirect("/login");
})
.catch(err=>console.trace(err))
});

router.post("/search", (req, res)=>{
  st= req.body;
  console.log(st);
  res.redirect("/login/library?id="+st.id+"&&question="+st.question)
})


router.get("/library", (req, res)=>{
  let stud = url.parse(req.url, true).query;
  Student.findById(stud.id)
  .then(result=>{
    Material.find()
    .then(library=>{
      let lib=[], question;
      
      if(stud.question){
        question =stud.question
      }else{
        question="book";
      }
    for(book of library){
     
    console.log(book);
      
      let {title, author, description}=book;
      if(compare(question, title)||compare(question, author)||compare(question, description)){
        lib.push(book);
      }
    }
      res.render("library", {
      title:"Library", 
      student: result, 
      info: result, 
      myLib: lib, 
      question
    }) 
    })
    .catch(err=>console.trace(err))
  })
  .catch(err=>console.trace(err))
})
            
router.get('', (req, res) => {
    try {
      let stud = url.parse(req.url, true).query;
      if(stud.id){
        Student.findById(stud.id)
        .then(result=>{
           res.render('loggedin', {
        student: result,
        info: result,
        title: "Login"
        });
        })
       . catch(err=>console.trace(err))
      }
        console.log(req.url)
        res.render('login', { title: "Login" });
    } catch (err) {
      console.trace(err);
        res.redirect('/');
    }
});
module.exports = router;
