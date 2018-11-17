const express = require('express');
const request = require('request');
const http = require('http');

const app = express();

const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://cdaAdmin:q3iIPBqxNiyb570y@cda-db-kv5tl.mongodb.net/test?retryWrites=true';


app.use(express.static(__dirname + '/dist/cda'));

const path = require('path');

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/cda/index.html'));
});

MongoClient.connect(uri, function(err, client) {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('created');
  client.close();
});


const getData = (url) => {
  const options = {
    url: url
  };

  return new Promise((resolve, reject) => {
    request.get(options, (err, res, body) => {
      if (err) {
        reject(err)
      } else {
        resolve(body);
      }
    })
  })
};

const errHandler = (err) => {
  console.log(err);
};

app.get('/cda/shop', (req, res) => {
  const url = 'https://s3.us-east-2.amazonaws.com/cda-apparel/CdaAppareal.json';

  getData(url)
    .then(JSON.parse, errHandler)
    .then((results) => {
      console.log(results);
      res.json(results);
    })
});

const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`See CDA on port: ${port}`);
});

