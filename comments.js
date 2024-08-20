// Create web server
// Create a new web server that listens on port 3000
// Create a new route for GET requests to /comments
// Respond with an array of comments

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/comments") {
    fs.readFile("./comments.json", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Server error" }));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});