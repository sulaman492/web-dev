const express=require("express");
const app=express();
port=3000;

app.set("view engine",'ejs')
app.get("/",(req,res)=>{
    let siteName="Addidas";
    let searchText="Search Now";
    let arr=["Sulaman",1,2]
    res.render("index",{siteName:siteName,searchText:searchText,arr})
})

app.get("/blog/:slug",(req,res)=>{
    let blogTittle="Why Addidas?";
    let blogContent="Search Now";
    res.sendFile("views/index.html",{root:__dirname})
})


app.listen(port,()=>{
    console.log(`app listening on http://localhost:${port}`);
    
})