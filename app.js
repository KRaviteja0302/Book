var express=require('express');

const mongoose = require('mongoose');

require('dotenv/config');

var Book=require('./BookApp/controller/book.js');

var bodyparser=require('body-parser');

var app=express();

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:true}));



    app.post('/Book/bookdetails',Book.create);
    app.get('/Book/getbookdetails',Book.getbookdetails);

    mongoose.connect('process.env.DB_CONNECTION',{
        useNewUrlParser: true,useUnifiedTopology: true

    }, () => console.log('connected'));

    app.listen(5000,()=>{
        console.log('server listening on the port 5000')
    })