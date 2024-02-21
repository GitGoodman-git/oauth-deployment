const  express = require("express");
const  parser = require('body-parser');
const  path = require('path');

const  oauth =require(path.join(process.cwd(),"auth","Oauth"));

const handlebars=require('express-handlebars');
const app=express();
/*
app.set('handlebars',handlebars.engine());
app.set('view engine','handlebars');
app.set('views','./views');
app.engine('handlebars');
*/
app.use(express.static(path.join(__dirname, 'public')));
app.use(oauth);

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use('/home',(req,res)=>{
   res.render("home");
});

app.listen(3000,()=>console.log("started"))







































