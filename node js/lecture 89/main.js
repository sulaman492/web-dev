const express=require('express');
const blog=require('./routes/blog')
const Home=require('./routes/Home')
const app=express();
port=3000;

app.use(express.static("public"))

app.use('/blog',blog)
app.use('/ome',Home)

app.get('/',(req,res)=>{
    console.log('get request');
    res.send("Hello world get!");
}).post('/',(req,res)=>{
    console.log("post request");
    res.send("hello world post!")
})


app.put('/',(req,res)=>{
    console.log("put request");
    res.send("hello world put!")
})

app.get('/index',(req,res)=>{
    console.log("index");
    res.sendFile('template/index.html',{root:__dirname})
})



app.listen(port,()=>{
console.log(`port running on http://localhost:${port}`)
})