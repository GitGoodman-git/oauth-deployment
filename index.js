const  express = require("express");
const  parser = require('body-parser');
const  path = require('path');
const session = require('express-session');
const  oauth =require(path.join(process.cwd(),"auth","Oauth"));

//const handlebars=require('express-handlebars');
const app=express();
/*
app.set('handlebars',handlebars.engine());
app.set('view engine','handlebars');
app.set('views','./views');
app.engine('handlebars');
*/
//app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
   secret: 'your-secret-key',
   resave: false,
   saveUninitialized: false
}));

app.use(oauth);

// Initialize Passport.js
//app.use(parser.json());
//app.use(parser.urlencoded({ extended: true }));
app.use('/home',(req,res)=>{
   res.send("Done")//res.render("home");
});

app.listen(3000,()=>console.log("started"))







































