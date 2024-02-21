const express=require("express")
const passport =require("passport");
const OAuth2Strategy=require('passport-oauth').OAuth2Strategy;
require('dotenv').config()
const credentials={
    clientID:process.env.client_id,  
    clientSecret:process.env.client_secret, 
    callbackURL:process.env.redirect_uris,
    tokenURL:process.env.token_uri,
    authorizationURL:process.env.auth_uri,
    passReqToCallback   : true,
    scope:["email",'profile']
    }

  passport.serializeUser(function(user, done) {
      done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
          done(null, user);
  });
  passport.use('provider',new OAuth2Strategy(
   credentials
  ,(accessToken, refreshToken, profile,done)=>{
   console.log("Args:",this.arguments)
   console.log(profile);
   return done(null,profile)
})
            );

const router=express.Router();

router.use("/auth/redirect",passport.authenticate('provider',{
failureRedirect:"/failure"}),(req,res)=>{res.redirect("/passed")});

router.use("/auth/oauth",passport.authenticate('provider'))

module.exports=router;

