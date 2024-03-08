const UsersModel = require("../model/UsersModel");
const jwt=require('jsonwebtoken');
exports.registration=async (req,res)=>{
    try{
        let reqBody=req.body;

        await UsersModel.create(reqBody);
        res.json({status:"success",message:"Registration Completed"})

    }catch (e){
        res.json({status:"fail",message:err})
    }

}


exports.login=async (req,res)=>{

    try{
        let reqBody=req.body;

        let user=await UsersModel.find(reqBody)
        res.json({status:"success",message:user})

        if(user.length>0){
            //JWT Token
            let Payload={exp:Math.floor(Date.now()/1000)+(24*60*60),data:reqBody['email']}
            let token=jwt.sign(Payload,"123-xyz");
            res.json({status:"success",message:"User Found"})

        }else{
            res.json({status:"fail",message:"No User Found"})
        }


    }catch (e){
        res.json({status:"fail",message:err})
    }

}

exports.profileUpdate=(req,res)=>{

}

exports.profileDetail=(req,res)=>{

}

exports.verifyEmail=(req,res)=>{

}

exports.verifyOTP=(req,res)=>{

}

exports.passwordReset=(req,res)=>{

}


