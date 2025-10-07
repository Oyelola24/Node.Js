const http = require("http");

http
  .createServer((req, res) => {
    res.end("<h1>Hello Node!!!!</h1>\n");
  })
  .listen(3000);

console.log("Server is running on port 3000");