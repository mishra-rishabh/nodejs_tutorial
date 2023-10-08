require("dotenv").config();

const {getRequest, postRequest, deleteRequest, putRequest} = require("./methods/http_methods");
let animes = require("./data/anime.json")

const http = require("http");
const PORT = process.env.PORT || 3002;

const server = http.createServer((req, res) => {
    req.animes = animes;

    switch(req.method) {
        case "GET":
            getRequest(req, res);
            break;
        case "POST":
            postRequest(req, res);
            break;
        case "PUT":
            putRequest(req, res);
            break;
        case "DELETE":
            deleteRequest(req, res);
            break;
        default:
            res.statusCode = 404;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(
                {
                    title: "404 Not Found",
                    message: "Route not found!"
                }
            ));
            res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});