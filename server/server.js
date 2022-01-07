const express=require('express');
const app=express();

const port=5000 ||process.env.port;

require('./models/db');



app.use('/',(req,res)=>{
    res.send('hello world');
})

app.listen(port,()=>{
    console.log(`listenting to port ${port}`)
});