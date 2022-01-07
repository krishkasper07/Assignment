const router=require('express').Router();
const User=require('../models/userSchema');
const bcrypt=require('bcryptjs');

module.exports=router.post('/register',async(req,res)=>{
    try {
        var emailExistInDB= await User.findOne({email:req.body.email});
        if(emailExistInDB){
            return res.status(400).json('email-Id is already exist');
        }
        //password hashing 
        var hash= await bcrypt.hash(req.body.password,10);
        const user=new User({
            name:req.body.name,
            email:req.body.email,
            password:hash
        });
        //saving the data in db
          var data= await user.save();
    } catch (error) {
        console.log(`error:${error}`)
    }
    res.json(data);
});