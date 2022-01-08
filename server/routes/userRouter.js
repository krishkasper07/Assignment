const router=require('express').Router();
const User=require('../models/userSchema');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

router.post('/register',async(req,res)=>{
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
        res.status(400).json(error);
    }
    res.json(data);
});
router.post('/login',async (req,res)=>{
    try {
        var validUser= await User.findOne({email:req.body.email});
        if(!validUser){
            return res.status(400).json('Email not exist');
        }
        var validPassword=await bcrypt.compare(req.body.password,validUser.password);
       
        if(!validPassword){
            return res.status(400).json('Incorrect password');
        }
        var userToken= await jwt.sign({email:validUser.email},'oneSecret');
        
        res.header('auth',userToken).send(userToken);

    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports=router;