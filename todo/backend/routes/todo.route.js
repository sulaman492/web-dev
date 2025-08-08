import express from "express"
import todo from "../model/todo.model.js";


const router=express.Router()

router.get("/",async(req,res)=>{
    try {
        const todo=todo.find();
        res.json(todo)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

router.post("/",async(req,res)=>{
    const Todo=new todo({
        text:req.body.text
    })
    try {
        const newTodo=Todo.save()
        res.status(201).json(newTodo)
    } catch (error) {
        res.status(400).json({message:error.message})
    } 
})

router.patch("/:id",async(req,res)=>{
    try {
        const newtodo=await todo.findById(req.params.id);
        if(!newtodo) return res.status(400).json({message:"Todo not found"})

        if(req.body.text!=undefined){
            newtodo.text=req.body.text;
        }    
        if(req.body.completed!=undefined){
            newtodo.completed=req.body.completed;
        }
        const updatedtodo=await newtodo.save();
        res.json(updatedtodo)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        await todo.findByIdAndDelete(req.params.id);
        res.json({message:"todo deleted"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

export default router;