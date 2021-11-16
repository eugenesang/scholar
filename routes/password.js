const express = require("express");
const mongoose=require("mongoose");
const Student=require("../models/students")
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.post('/forgot', (req, res) => {
    let { email, phone, password } = req.body;
    Student.find()
    .then(result=>{
      for(student of result){
        if(student.email==email && student.phone==phone){
          student.password=password;
          student.save()
          .then(stud=>{
            res.redirect("/login")
            return;
          })
         .catch(err=>err) 
        }
      }
      res.status(404).send();
    })
    .catch(err=>err)
});

router.get('/forgot', (req, res) => {
    res.render('pwd', { title: "password reset" });
})

module.exports = router;
