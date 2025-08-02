const express = require("express");
const db=require("./DL/db")
const app = express(); // <-- parentheses here
const port = 3000;


app.use(express.json());



app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/singersongs", (req, res) => {
    res.send("Hello world");
});




app.get("/users", (req, res) => {
    db.query("SELECT * FROM faculty",(err,results)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(results);
        }
    })
});


app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});

