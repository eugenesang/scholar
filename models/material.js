const mongoose= require ("mongoose");
const Schema =mongoose.Schema;

const materialSchema =new Schema({
  title:{ type: String}, 
  author: {type: String}, 
  type: {type: String}, 
  size:{type: String }, 
  link:{type: String}, 
  description:{ type: String }
}, {timestamps: true});

const Material=mongoose.model("Material", materialSchema);

module.exports=Material;  
