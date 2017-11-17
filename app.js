var express=require('express');
var path=require('path');
var app=express();
app.use('/',express.static(path.join(__dirname,'deploy')));
app.listen(3000,function(){
    console.log('your static server is up and running @3000 port')
});

