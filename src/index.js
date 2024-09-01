const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {port} = require('./config/serverConfig');
const apiRoutes = require('./routes/index')

const db = require('./models/index')

const setupAndStartServer = async () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.use('/api',apiRoutes);

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true});
        }
    });
    

};

setupAndStartServer();