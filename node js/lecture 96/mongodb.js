import express from "express";
import mongoose from "mongoose";
import { Todo } from "./models/Todo.js";

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/todo")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
    const todo=new Todo({title:"Hey first Todo",desc:"description of this first Todo",isDone:false})
    todo.save();
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
