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

//Security
app.use(helmet());
app.use(hpp())
app.use(express.json({limit:'20mb'}))
app.use(express.urlencoded({extended:true}));

const limiter=rateLimit({windowMS:15*60*1000})
