const express = require('express');
const url = require('url');
const mongoose=require("mongoose");
const Student=require("../models/students");

const router = express.Router();


router.get('/java', (req, res) => {
    let stud = url.parse(req.url, true).query;
  Student.findById(stud.id)
  .then(student=>{
    if(stud.level){
      if(+stud.level > +student.learningProgress.java){
      student.learningProgress.java=stud.level;
      student.save()
     .then(result=>{
       res.render("java",{  student:result, title:"Learn Java"});
    
     })
    .catch(err=>err);
    }
    }
    
    res.render("java",{  student, title:"Learn Java"});
  })
.catch(err=>err);

});


router.get('/cpp', (req, res) => {
    let stud = url.parse(req.url, true).query;
  Student.findById(stud.id)
  .then(student=>{
    if(stud.level){
      if(+stud.level > +student.learningProgress.cpp){
      student.learningProgress.cpp=stud.level;
      student.save()
     .then(result=>{
       res.render("cpp",{  student:result, title:"Learn C++"});
    
     })
    .catch(err=>err);
    }
    }
    
    res.render("cpp",{  student, title:"Learn C++"});
  })
.catch(err=>err);

});

 
 router.get('/javascript', (req, res) => {
    let stud = url.parse(req.url, true).query;
  Student.findById(stud.id)
  .then(student=>{
    if(stud.level){
      if(+stud.level > +student.learningProgress.javascript){
      student.learningProgress.javascript=stud.level;
      student.save()
     .then(result=>{
       res.render("js",{  student:result, title:"Learn Javascript"});
    
     })
    .catch(err=>err);
    }
    }
    
    res.render("js",{  student, title:"Learn Javascript"});
  })
.catch(err=>err);

});
 

router.get('', (req, res) => {
    let st = url.parse(req.url, true).query;
    Student.findById(st.id)
    .then(
      student=>{
    res.render('learn', { student, title: "learn Java" });

      }
    )
    .catch(err=>err)
    });

module.exports = router;
