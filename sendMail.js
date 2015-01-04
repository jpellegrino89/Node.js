/**
 * Created by jpellegrino on 1/3/15.
 */
//var http=require('http')
var nodemailer=require('nodemailer');
var express=require('express');
var app=express();
var codeString;

app.get('/code', function(req,res){
    res.writeHead(200);
    sendEmail();
    res.end(codeString);
});

app.listen(8888);

var transporter=nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:'', //Gmail Username
        pass:''  //Gmail Password

    }
});

function sendEmail(){
    generateCode();
    var mailOptions = {
        from: 'Code Generator ✔ <>', // sender address
        to: '', // list of receivers
        //subject: 'Hello ✔', // Subject line
        text: codeString // plaintext body
        //html: '<b>Hello world ✔</b>' // html body
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });
}

function generateCode(){
    code=new Array(Math.floor(Math.random() * (10 - 1) + 1),Math.floor(Math.random() * (10 - 1) + 1),Math.floor(Math.random() * (10 - 1) + 1),Math.floor(Math.random() * (10 - 1) + 1));
    codeString=code.toString();
}

//Obsolete Code Below

/*
 var server=http.createServer(function(req,res){
 // demo();
 res.writeHead(200);
 //generateCode();
 sendEmail();
 //res.write(generateCode());
 res.end(codeString);
 });
 http.port=8888;
 server.listen(http.port);
 console.log ("HTTP Server is listening on port "+http.port);
 */

