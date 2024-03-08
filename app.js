//Basic Lib Import
const  express=require('express');
const router=require('./src/route/api');
const  app= new express();
const rateLimit=require('express-rate-limiter');
const helmet =require('helmet');
const hpp= require('hpp');
const  cors=require('cors');
const mongoose=require('mongoose');


//Cors Open
app.use(cors());

//Security Implement
app.use(helmet());//1st
app.use(hpp());
app.use(express.json({limit:'20mb'}))
app.use(express.urlencoded({extended:true}));

const limiter=rateLimit({windowMS:15*60*1000,max:3000})
app.use(limiter);

let URL="mongodb://localhost:27017/taskmern"
let OPTION={user:"",pass:"",autoIndex:true}
mongoose.connect(URL,OPTION,(err)=>{
    console.log("Connection Success")
    console.log(err)
})