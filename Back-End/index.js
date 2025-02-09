const express = require('express');
const rotteUtenti = require('./rotte/rotteUtenti');
const rottePost = require('./rotte/rottePost');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(bodyParser.json());

app.use('/api', rotteUtenti, rottePost);

app.listen(port, () => {
    console.log(`La porta è http://localhost:${port}`);
  });