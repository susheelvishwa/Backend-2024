const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/profile") {
        console.log("Here is the profile data");
        res.end("Profile data");
    }
});

server.listen(3000, () => {
    console.log("server is running");
});
