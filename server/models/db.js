const mongoose=require('mongoose');

module.exports=mongoose.connect('mongodb://localhost:27017/Json-Uploader',{
    useUnifiedTopology:true,
    useNewUrlParser :true,
},(err)=>{
    if(err){
        console.log(`error in db connection ${err}`)
    }
    else{
        console.log("connected to the db successfully");
    }
})