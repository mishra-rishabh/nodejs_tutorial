const express = require("express");
const app = express();

/* middleware */
app.use(function(req, res, next) {
    // do your code
    console.log("middleware running before all routes");
    next();
});

app.get("/", function(req, res) {
    res.send("hello home page");
});

app.get("/profile", function(req, res) {
    res.send("hello profile page");
});

app.listen(3000);