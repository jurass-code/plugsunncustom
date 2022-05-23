const http = require("http");
const fs = require("fs");

const readFile = (p) => {
  return new Promise((resolve, reject) => {
    fs.readFile(p, (err, data) => {
      if (err) reject(err);
      else {
        resolve(data);
      }
    });
  });
};
const server = http.createServer(async (req, res) => {
  const data = await readFile(__dirname + "/index.html");
  res.write(data);
  res.end();
});

server.listen(80);
