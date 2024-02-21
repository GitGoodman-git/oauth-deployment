import express from 'express';
import loginPage from path.join(process.cwd,"controllers","main");

let Router=express.Router();
Router.use(express.static(__dirname + 'public'));
Router.use(parser.json)
Router.use(parser.urlencoded)

Router.use("/",(req,res,next)=>{
  res.redirect("/login");  
  
})

Router.get("/login",loginPage);

export default Router;
