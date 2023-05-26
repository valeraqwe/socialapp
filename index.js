const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.status(200).send("<h1>Hello from Valeraaa 2024 yessss!</h1>")
})

app.get("/api/v1/facebook", (req, res) => {
    const instaSocial = {
        username: "valerafb",
        followers: 33,
        follows: 11,
        date: Date.now()
    };

    res.status(200).json(instaSocial);
});

app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username: "valerainsta",
        followers: 239,
        follows: 118,
        date: Date.now()
    };

    res.status(200).json(instaSocial);
});

app.get("/api/v1/linkedin", (req, res) => {
    const instaSocial = {
        username: "valeralk",
        followers: 3,
        follows: 3,
        date: Date.now()
    };

    res.status(200).json(instaSocial);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})