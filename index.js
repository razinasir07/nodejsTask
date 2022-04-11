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
const UserRoute= require('./routes/createUser')
const xss= require('xss-clean')
const mongoSanitize= require('express-mongo-sanitize')
const rateLimiter= require('express-rate-limit')
const helmet= require('helmet');


mongoose.connect(
  "mongodb+srv://razinasir:node123@cluster0.cfyde.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  (res)=>{
    try{
    console.log(res)
    console.log('connected to database')
    }
    catch(err){
      return res.status(400).json({
        status:"Not found",
        message:"Error while connecting to the database"
      })
    }
  }
);

app.use(express.json());

app.use(mongoSanitize())

app.use(helmet());

app.use(xss());

const Limiter= rateLimiter({
  max:100,
  windowMs:60 * 60 *1000,
  message:"Too many request for this IP, please try again in one hour"
})

app.use('/api',Limiter )

app.use('/api/user', UserRoute);

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

//Error handling

app.use((req,res,next)=>{
  const error= new Error('Not Found');
  error.status=404;
  next(error);
});

app.use((error,req,res,next)=>{
  res.status(error.status || 500);
  res.json({
    error:{
      message: error.message
    }
  })
})

if(process.env.NODE_ENV === 'development'){
  app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: "Error while requesting",
      },
    });
  });
}

app.listen(3000, ()=>{
  console.log("The server is running at port 3000")
})