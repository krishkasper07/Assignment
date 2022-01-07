const express=require('express');

const app=express();

const port=5000 ||process.env.port;

const router=require('./routes/userRouter');

const morgan=require('morgan');

require('./models/db');

app.use(express.json());

app.use('/api',router);

app.use(morgan('dev'));

app.listen(port,()=>{
    console.log(`listenting to port ${port}`)
});