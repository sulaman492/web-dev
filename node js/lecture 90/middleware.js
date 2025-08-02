const express=require("express");
const fs=require("fs");
const bl = require("./routes/blogs");
// const blogs=route
const app=express()
port=3000;


app.use("/blogs",bl)

//make a function and then use it in app.use

// const myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }
// app.use(myLogger)

//middleware 1
app.use((req,res,next)=>{
    console.log('m1');
    // res.send("response sended")
    next();    
})

//middleware 2
app.use((req,res,next)=>{
    console.log("m2");
    next();
})

app.use((req,res,next)=>{
    console.log(req.headers);
    req.human="I am a human";
    fs.appendFileSync("logs,txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`);
    next();
    
})


app.get("/",(req,res)=>{
    res.send("Hello world"+req.human);
    console.log("hello response")
})

app.get("/about",(req,res)=>{
    res.send("Hello about");
    console.log("about contact")
})

app.get("/contact",(req,res)=>{
    res.send("Hello contact");
    console.log("hello contact")
})

app.listen(port,()=>{
console.log(`Server is running at http://localhost:${port}`);
})

// 1.applictaion level middleware
// 2.router level middleware
// 3.built in midlleware
// 4.error handling middleware
// 5.third party middleware
