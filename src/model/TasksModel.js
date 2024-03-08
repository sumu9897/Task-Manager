const mongoose=require('mongoose');

const DatabaseSchema= mongoose.Schema({
    email:{type:String,require:true},
    otp:{type:String,require:true},
    status:{type:String,require:true},




},{timestamps:true,versionKey:false});

const TasksModel=mongoose.model('tasks',DatabaseSchema)

module.exports=TasksModel;