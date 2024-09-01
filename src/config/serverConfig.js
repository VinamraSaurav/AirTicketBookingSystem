const dotenv = require('dotenv');

dotenv.config();

const serverConfig = {
    port: process.env.PORT || 3002,
};

module.exports = serverConfig;