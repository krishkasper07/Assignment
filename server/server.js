const express=require('express');
const app=express();

const port=5000 ||process.env.port;

require('./models/db');

const router=require('./routes/routes')

app.use('/api',router);

app.use('/',(req,res)=>{
    res.send('hello world');
})

app.listen(port,()=>{
    console.log(`listenting to port ${port}`)
});