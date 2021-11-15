const mongoose= require ("mongoose");
const Schema =mongoose.Schema;

const studentSchema =new Schema({
  name:{ type: String}, 
  age: {type: String}, 
  email: {type: String}, 
  phone:{type: String }, 
  gender:{type: String}, 
  password:{ type: String }, 
  learningProgress:{
    cpp:{type: String}, 
    java:{type: String}, 
    javascript:{type: String}
  }
}, {timestamps: true});

const Student=mongoose.model("Student", studentSchema);

module.exports=Student;
