const mongoose= require("mongoose");
const express = require('express');
const router = express.Router();
const Student= require("../models/students")
const { urlencoded } = require('express');
router.use(urlencoded({ extended: true }))
router.post('', (req, res) => { 

let level={
  cpp:"1", 
  java:"1", 
  javascript:"1"
};
req.body.learningProgress=level;

const student= new Student(req.body);
student.save()
.then(r=>{
  console.log(r);
  res.render('loggedin', {
        student,
        info: r,
        title: "First Login"
    });
})
.catch(err=>console.trace(err))
})
router.get('', (req, res) => {
    res.render('register', { title: "Register" });
})
module.exports = router;
