const mongoose= require ("mongoose");
const Schema =mongoose.Schema;

const commentSchema =new Schema({
  name:{ type: String},  
  email: {type: String}, 
  message:{type: String}, 
  subject:{ type: String }
}, {timestamps: true});

const Comment=mongoose.model("Comment", commentSchema);

module.exports=Comment; 
