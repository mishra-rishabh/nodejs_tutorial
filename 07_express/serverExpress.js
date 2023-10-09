require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3002;

app.get("/", (req, res) => {
    // res.send("Vande Mataram! Welcome to express js tutorial");
    res.json({message: "Vande Mataram! Welcome to express js tutorial"});
});

app.get("/animes", (req, res) => {
    res.json({message: "Get all animes"});
});

app.get("/animes/:id", (req, res) => {
    res.json({message: `Get anime with id ${req.params.id}`});
});

app.post("/animes/", (req, res) => {
    res.json({message: "Add new anime"});
});

app.put("/animes/:id", (req, res) => {
    res.json({message: `Update anime with id ${req.params.id}`});
});

app.delete("/animes/:id", (req, res) => {
    res.json({message: `Delete anime with id ${req.params.id}`});
});

app.listen(PORT, () => {
    console.log("Express server listening on port: ", PORT);
});