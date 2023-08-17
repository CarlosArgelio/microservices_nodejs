const express = require('express');
const config = require('../config/config');
const bodyParser = require('body-parser');
const { logErrors, errorHandler, boomErrorHandler } = require('../middlewares/error.handler')

const post = require('./components/posts/network')

const port = config.app.port;

const app = express();

app.use(bodyParser.json());

app.use(`${config.app.prefix}/posts`, post)

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
