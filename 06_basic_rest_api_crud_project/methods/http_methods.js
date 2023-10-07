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
}