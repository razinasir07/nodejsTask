const express =require('express');
const app= express();
const mongoose= require('mongoose');
const authRoute = require("./Authentication/auth");
const studentRoute= require("./routes/createStudent");
const facultyRoute= require("./routes/createFaculty");
const examRoute=require("./routes/createExamination");
const courseRoute= require("./routes/createCourse");
const marksRoute= require('./routes/createMarks');
const paperRoute = require('./routes/createPaper');
const authFacultyRoute= require('./Authentication/authFaculty')
const authStudentRoute= require('./Authentication/authStudent')



mongoose.connect(
  "mongodb+srv://razinasir:node123@cluster0.cfyde.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  (res)=>{
    console.log(res)
    console.log('connected to database')
  }
);

app.use(express.json());

app.use('/api/admin', authRoute);

app.use('/api/student', studentRoute);

app.use('/api/faculty', facultyRoute);


app.use('/api/examination',examRoute );

app.use('/api/course', courseRoute);

app.use('/api/marks', marksRoute);

app.use('/api/paper', paperRoute);

app.use('/api/authFaculty', authFacultyRoute );

app.use('/api/authStudent', authStudentRoute);


app.use('*',(req,res)=> {
  return res.status(404).json({
    status: 'Not Found',
    message: 'Page not found'
  })
})
app.listen(3000, ()=>{
  console.log("The server is running at port 3000")
})