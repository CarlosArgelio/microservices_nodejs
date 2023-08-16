require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 3000,
        prefix: process.env.BASE_HOST_URL || '/api'
    }
}
