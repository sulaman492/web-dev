import express from "express"
import connection, { connectDB } from "./config/db.js"
import env from "dotenv";
env.config();

const app=express();
app.use(express.json())
const port=5000;

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.listen(port,()=>{
    connectDB();
    console.log(`app listening on http://localhost:${port}`);
    
})