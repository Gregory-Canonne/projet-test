/* ----------------> INITIALIZE */
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const bodyParser = require('body-parser');
const fs = require("fs");

/* ----------------> BODY PARSER MANAGEMENT DATA TO JSON */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended : true }))

/* ----------------> CROSS ORIGINE */
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

/* ----------------> REGISTER */
app.post('/upload', (req, res) => {
  const { file, name } = req.body.file;
  const ref = Date.now();
  const dir = './upload/';
  const matches = file.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  const data = new Buffer(matches[2], 'base64');
  let nameFile = name;
  let tab = [];

  const test = () => {
    return new Promise((resolve) => {
      fs.readdir(dir, (err, list) => {
        list.forEach((elem) => {
          tab.push(elem);
        });
      });
      resolve();
      console.log("promise", tab)
    });
  };

  test().then(() => {
    if (file) {
      console.log('after', tab)
      tab.filter(elem => elem === nameFile)
      fs.writeFile(`${dir}${ref}${tab.length >= 0 ? ref + nameFile : nameFile}`, res.data, 'base64', (err, data) => {
        if (err) {
          console.log(err, 'err');
        }
      });
    }
    else {
      res.status(400).json({ error: 'Aucun fichier detecter' });
    }
  });
});

/* ----------------> PORT SERVER NODE CONNECT */
server.listen(5000, () => {
  console.log('Connection server on port 5000');
});
