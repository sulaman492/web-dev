const express = require("express");
const { faker } = require('@faker-js/faker');
const db = require("./db");
const path = require("path");

const app = express();
app.use(express.static("./views/index.html"))

port = 3000;


app.get("/", (req, res) => {
    res.sendFile("./views/index.html",{root:__dirname})
})

app.post("/generate", (req, res) => {
    for (let index = 0; index < 10; index++) {

        let name = faker.person.fullName();
        let city = faker.location.city();
        let language = faker.helpers.arrayElement(["Python", "Java", "C"]);
        let salary = faker.number.int({ min: 30000, max: 1000000 });

        let query = "INSERT INTO employee (name,salary,city,language) VALUES (?,?,?,?)";
        let values = [name, salary, city, language]

        db.query(query, values, (err, results) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(`${index}`);

            }
        })
    }
    res.send("Data added")

})
app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);

}) 