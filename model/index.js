const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/dbase",{ useNewUrlParser: true , useUnifiedTopology: true },(error)=>{
  if(!error)
  {
    console.log("Sucessfully");
  }
  else {
      console.log("Error connecting to the database.")
    }
});

const Course =  require("./courses.model");
