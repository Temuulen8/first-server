const http = require("http");

const name = ["Testuser"];

const server = http.createServer((request, response) => {
  console.log("Request", request);

  if (request.method === "POST") {
    name.push("Bataa");
    response.end(JSON.stringify({ name }));
  } else {
    response.end(JSON.stringify({ name }));
  }
});

server.listen(8000, () => {
  console.log("Server is running.");
});
