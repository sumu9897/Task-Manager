const mongoose=require('mongoose');

const DatabaseSchema= mongoose.Schema({
    title:{type:String,require:true},
    description:{type:String,require:true},
    status:{type:String,require:true},



},{timestamps:true,versionKey:false});

const OTPModel=mongoose.model('otps',DatabaseSchema)

module.exports=OTPModel;