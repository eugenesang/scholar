const express = require ("express");
const app= express();
const mongoose= require("mongoose");

app.set("view engine", "ejs");
app.use(express.static("public"));

const uri="mongodb+srv://eugene:24Kmagic@cluster0.lql82.mongodb.net/school?retryWrites=true&w=majority";
mongoose.connect(uri, {useUnifiedTopology:true, useNewUrlParser:true})
.then(r=>{
  app.listen(3000, ()=>{
    console.log("app listening on port 3000")
  })
});

app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/material", require("./routes/admin"));
app.use("/learn", require("./routes/learn"));
app.use("/password", require("./routes/password"));
app.use("/info", require("./routes/info"))
app.get("/", (req, res)=>{
  res.render("index", {title: "Home"})
});

app.use((req, res)=>{
  res.status(404).render("404", {title:"Error Page"});
})
