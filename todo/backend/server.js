import express from "express"
import { connectDB } from "./config/db.js"
import todoRoutes from "./routes/todo.route.js";
import dotenv from "dotenv";
dotenv.config();

const app=express();
app.use(express.json())
const port=5000;

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.use("/api/routes",todoRoutes)
app.listen(port,()=>{
    connectDB();
    console.log(`app listening on http://localhost:${port}`);
    
})