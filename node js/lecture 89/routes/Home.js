const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Home Page")
})

router.get("/Form",(req,res)=>{
    res.send("Hom Login Form Page")
})

router.get("/back",(req,res)=>{
    res.send(" go back")
})


module.exports=router;