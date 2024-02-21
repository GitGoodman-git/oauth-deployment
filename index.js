const  express = require("express");
const  parser = require('body-parser');
const  path = require('path');
const passport=require('passport');
const cookieSession = require('cookie-session');
const  oauth =require(path.join(process.cwd(),"auth","Oauth"));

const handlebars=require('express-handlebars');
const app=express();
/*
app.set('handlebars',handlebars.engine());
app.set('view engine','handlebars');
app.set('views','./views');
app.engine('handlebars');
*/

app.use(cookieSession({
   name: 'google-auth-session',
   keys: ['key1', 'key2']
 }))
 
 app.use(passport.initialize());
 app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));
app.use(oauth);

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use('/',(req,res)=>{
   res.redirect("/home");
});
app.use('/home',(req,res)=>{
   res.render("home");
});
app.use('/passed',(req,res)=>{
   res.render("passed");
});
app.use('/failure',(req,res)=>{
   res.render("failure");
});

app.listen(3000,()=>console.log("started"))







































