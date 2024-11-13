const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>Home Page</h1>");
  }

  if (req.url == "/users") {
    const users = [
      {
        name: "João da Silva",
        email: "jaodasilva@gmail.com",
      },
      {
        name: "Joana Souza",
        email: "Joanasouza@gmail.com",
      },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}!`));
