const express=require('express');
const app=express();

const port=5000 ||process.env.port;

require('./models/db');

app.use(express.json());

const router=require('./routes/userRouter');

app.use('/api',router);

app.listen(port,()=>{
    console.log(`listenting to port ${port}`)
});