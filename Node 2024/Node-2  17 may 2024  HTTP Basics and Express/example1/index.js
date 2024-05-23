const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === '/data' && Request.method === "GET") {
        console.log("client requested some kind of data");
        res.end("Data page")
    } else if (req.url === "/home") {
        console.log("clint request home page");
        res.end("home page")
    } else if (req.url === "/about") {
        console.log("clint request about page");
        res.write("this is about page")
        res.end(".........about page")
    } else {
        res.end("404 User not found")
    }
})

server.listen(3000, () => {
    console.log("server is running");
})