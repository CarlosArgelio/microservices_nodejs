const express = require('express');
const config = require('../config/config');
const bodyParser = require('body-parser');

const post = require('./components/posts/network')

const port = config.app.port;

const app = express();

app.use(bodyParser.json());

app.use(`${config.app.prefix}/posts`, post)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
