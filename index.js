const express = require('express');
const format = require('date-format');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.status(200).send("<h1>Hello from Valeraaa 2024 yesssss!</h1>");
});

app.get("/api/v1/facebook", (req, res) => {
    const facebookData = {
        username: "valerafb",
        followers: 33,
        follows: 11,
        date: format.asString("dd[MM] - :hh:mm:ss", new Date())
    };

    res.status(200).json(facebookData);
});

app.get("/api/v1/instagram", (req, res) => {
    const instagramData = {
        username: "valerainsta",
        followers: 239,
        follows: 118,
        date: format.asString("dd[MM] - :hh:mm:ss", new Date())
    };

    res.status(200).json(instagramData);
});

app.get("/api/v1/linkedin", (req, res) => {
    const linkedinData = {
        username: "valeralk",
        followers: 3,
        follows: 3,
        date: format.asString("yyyy-MM-dd.", new Date())
    };

    res.status(200).json(linkedinData);
});

app.get("/api/v1/:token", (req, res) => {
    const token = req.params.token;
    console.log(token);
    res.status(200).json({ param: token });
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
