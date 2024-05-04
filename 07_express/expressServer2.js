const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Hello World!");
});

app.get("/profile", function(req, res) {
    res.send("Hello from profile");
});

// request parameters (dynamic routing)
app.get("/profile/:username", function(req, res) {
    res.send(`Hello user ${req.params.username}`);
});

app.get("/error", function(req, res, next) {
    throw Error("Something went wrong!!");
});

app.use(function errorHandler(err, req, res, next) {
    if(res.headersSent) {
        return next(err);
    }

    res.status(500).send("Error aa gaya bhai");
});

app.listen(3000);