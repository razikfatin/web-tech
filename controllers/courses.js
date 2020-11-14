//connect to mongodb to get the data and to set up the routes
const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const CourseModel =  mongoose.model("Course");

// url as course/list
router.get("/add",(req, res)=>{
  res.render("add_course")
})

router.post("/add",(req, res)=>{
  console.log(req.body);
  var course = new CourseModel();
  course.courseName = req.body.courseName;
  course.courseDuration = req.body.courseDuration;
  course.courseFees = req.body.Fees;
  course.courseId = Math.ciel(Math.random() * 10000000);

  course.save((err, doc)=>{
      if(!err)
      {
        res.redirect("/course/list");
      }
      else {
          res.send("Error occured");
        }
  });

});

router.get("/list", (req, res)=>{
  //Setting
  // var course = new CourseModel();
  // course.courseName = "NodeJS";
  // course.courseId = "2";
  // course.save();

  //Getting
  CourseModel.find((err, doc)=>{
    if(!err)
    {
      res.render("list", { data : doc })
    }
    else {
          res.send("Error");
        }
  });
});

module.exports = router;
