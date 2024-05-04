const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Hello World!")
});

app.get("/profile", function(req, res) {
    res.send("Hello from profile")
});

app.listen(3000);