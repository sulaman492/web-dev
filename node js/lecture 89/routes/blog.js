const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Blog Home page")
})

router.get("/about",(req,res)=>{
    res.send("Blog About page")
})

router.get("/blogpost/:slug",(req,res)=>{
    res.send(`Fetch the data for ${req.params.slug}`)
})

module.exports = router;