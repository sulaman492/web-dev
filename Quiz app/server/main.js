const express = require("express");
const axios = require("axios")
const app = express();
const port = 3000;

app.use(express.json())

app.post("/quiz", async(req, res) => {
    let amount, difficulty, category, type = req.body;
    let apiUrl = `https://opentdb.com/api.php?amount=${amount || 10}`;
    if (category) apiUrl += `&category=${category}`
    if (difficulty) apiUrl += `&difficulty=${difficulty}`
    if (type) apiUrl += `&type=${type}`

    try {
        const response = await axios.get(apiUrl);
        res.send(response.data); // Axios auto-parses JSON
    }
    catch {

    }

})

app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
})