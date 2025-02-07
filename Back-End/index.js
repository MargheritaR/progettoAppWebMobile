const express = require('express');
const rotteUtenti = require('./rotte/rotteUtenti');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api', rotteUtenti);

app.listen(port, () => {
    console.log(`porta è http://localhost:${port}`);
  });