import userModel from "../models/userModel.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registeruser = async(req,res)=>{
  try {
    const {username,email,password} = req.body;
    if(!username || !email || !password){
      return res.json({success:false,message:"Please fill all the fields"});
    }
    const salt = await bcrypt.genSalt(10); bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password,salt);

    const userdata = {username, email, password:hashedpassword};

    const newuser = new userModel(userdata);
    const user = await newuser.save();

    const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});

    res.json({success:true. token, user:{name: user.username, email: user.email, id: user._id}});

} catch (error) {
    console.error("Error in registeruser:", error);
    res.status(500).json({success:false, message:"Server Error"});

}
}

export const loginuser = async(req,res)=>{
  try {
    const {email, password}= req.body;
    const user = await userModel.findOne({email});
    if(!user){
      return res.json({success:false,message:"User not found"});
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(isMatch){
     const token = jwt.sign({id: user._id},process.env.JWT_SECRET,{expiresIn:"7d"});

     res.json({success:true, token, user:{name: user.username}});
    }else{
      return res({success:false,message:"Invalid credentials"});
    }

  }catch (error) {
    console.error("Error in loginuser:", error);
    res.status(500).json({success:false, message:"Server Error"});
  }
}

