//requires
var express = require('express');
var path = require('path');
var session = require('express-session');

//init app as express object
var app = express();


//get main router

var mainRouter = require('./js/routes/mainrouter.js');


//set view engine & folder
app.set('view engine','jade');
app.set('views',path.join(__dirname,'views'));


//set static dir

app.use(express.static('public'));

//set session
app.use(session({
    secret: 'test',
    resave: 'false',
    saveUninitialized: true
}))



app.use('/',mainRouter);
app.use('/timeline',mainRouter);





//set port for app to listen to
app.listen(4000,function(){
    console.log('app running at 3000')
})