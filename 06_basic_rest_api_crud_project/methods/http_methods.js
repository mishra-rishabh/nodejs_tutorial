const bodyParser = require("../utils/body_parser");
const writeToFile = require("../utils/write_to_file");

exports.getRequest = (req, res) => {
    let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    const id = req.url.split("/")[3];

    if(req.url === "/api/animes") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(req.animes));
        res.end();
    } 
    else if(baseUrl === "/api/animes/" && id) {
        res.setHeader("Content-Type", "application/json");
        
        let filteredAnime = req.animes.filter((anime) => {
            return anime.id == id;
        });

        if(filteredAnime.length > 0) {
            res.statusCode = 200;
            res.write(JSON.stringify(filteredAnime));
            res.end();
        } else {
            res.statusCode = 404;
            res.write(JSON.stringify({title: "404 Not Found", message: "Anime Not Found!"}));
            res.end();
        }
    } else {
      res.writeHead(404, {"Content-Type": "application/json"});
      res.end(JSON.stringify({title: "Not Found", message: "Route Not Found!"})); 
    }
};

exports.postRequest = async (req, res) => {
    if(req.url === "/api/animes") {
        try {
            let body = await bodyParser(req);
            
            req.animes.push(body);
            writeToFile(req.animes)
            
            res.writeHead(201, {"Content-Type": "application/json"});
            res.end(JSON.stringify({
                title: "201 Created",
                message: "Anime added successfully"
            }));
        } catch (error) {
            console.log(error);
            
            res.writeHead(400, {"Content-Type": "application.json"});
            res.end(JSON.stringify({
                title: "Validation Failed!",
                message: "Request body is invalid!"
            }));
        }
    } else {
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({title: "Not Found", message: "Route Not Found!"})); 
    }
};

exports.deleteRequest = (req, res) => {
    let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    const id = req.url.split("/")[3];

    if(baseUrl === "/api/animes/" && id) {
        const index = req.animes.findIndex((anime) => {
            return anime.id == id;
        });

        if(index === -1) {
            res.statusCode = 404;
            res.write(JSON.stringify({title: "404 Not Found", message: "Anime Not Found!"}));
            res.end();
        } else {
            req.animes.splice(index, 1);
            writeToFile(req.animes);

            res.writeHead(204, {"Content-Type": "application/json"});
            res.end(JSON.stringify(req.animes));
        }
    } else {
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({title: "Not Found", message: "Route Not Found!"})); 
    }
};

exports.putRequest = async (req, res) => {
    let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    const id = req.url.split("/")[3];

    if(baseUrl === "/api/animes/" && id) {
        try {
            let body = await bodyParser(req);

            const index = req.animes.findIndex((anime) => {
                return anime.id == id;
            });
            
            if(index === -1) {
                res.statusCode = 404;
                res.write(JSON.stringify({title: "404 Not Found", message: "Anime Not Found!"}));
                res.end();
            } else {
                req.animes[index] = {id, ...body};
                writeToFile(req.animes);

                res.writeHead(200, {"Content-Type": "application/json"});
                res.end(JSON.stringify(req.animes[index]));
            }
        } catch (error) {
            console.log(error);
            
            res.writeHead(400, {"Content-Type": "application.json"});
            res.end(JSON.stringify({
                title: "Validation Failed!",
                message: "Request body is invalid!"
            }));
        }
    } else {
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({title: "Not Found", message: "Route Not Found!"})); 
    }
}