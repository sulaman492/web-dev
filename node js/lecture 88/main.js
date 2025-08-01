const express=require('express')
const app=express();
port=3000;

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.get('/Home',(req,res)=>{
    res.send("Hello Home");
})

app.get('/About',(req,res)=>{
    res.send("About us");
})

app.get('/contact',(req,res)=>{
    res.send("Hello contact");
})

let slug;
app.get(`/blog/:slug`,(req,res)=>{
    console.log(req.params.slug);
    
    res.send(`hello ${req.params.slug}`);
})


app.listen(port,()=>
    {console.log(`App listening at http://localhost:${port}`);
})