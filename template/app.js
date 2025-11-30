const express=require('express');
const cors=require('cors');
const rateLimt=require('express-rate-limit');
const helmet=require('helmet');
const hpp=require('hpp');  //http parameters pollution
const cookieParser=require('cookie-parser');
const mongoSanitize=require('express-mongo-sanitize');  // for sanitizing the data comes from the backend to secure from the xxs scripts and all
const xss=require('xss-clean');

const GlobalErrorResponse=require('./utils/globalErrorResponse');
const AppError = require('./utils/appError');

const app=express();


const rateLimiter=rateLimt({
    max:100, // max number of request from the same ip,
    windowMs:60*60*1000, // after how much time the the server start accept the request
    message:"Too many request from same ip try after 1 hour"
})

app.use('/',rateLimiter)  // set the route according to you 

// for https security headers
app.use(helmet());

app.use(express.json({limit:"10kb"}));


// sanitization the data again the nosql injection
app.use(mongoSanitize())

// data sanitization against the xss scripts

app.use(xss())

app.use(cors({origin:"*",credentials:true})) // modify the origin accorrding to you and crendential set true for the sending and receive the cokies

app.use(cookieParser())  // for parsing the cookies

// preventing the pramaters pollution

app.use(hpp())


app.use("/api/users",require('./routes/example.route'))


// for unmatched route
app.use((req, res, next) => {
  next(new AppError("No Route Found",404))
});

app.use(GlobalErrorResponse)




module.exports=app;