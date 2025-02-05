const express = require('express');
const sql = require('./configurazioni/dbConf');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`porta è http://localhost:${port}`);
  });