require('./../models/User');
require('./../models/Article');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = (config) => {
    mongoose.connect(config.connectionString);

    let database = mongoose.connection;
    database.once('open', (error) => {
        if (error) {
            console.log(error);
            return;
        }

        console.log('MongoDB ready!')
    });

    require('./../models/User');
    require('./../models/Article');

    const homeController = require('./../controllers/home');

    module.exports = (app) => {
        app.get('/', homeController.index);

        app.get('/user/register', userController.registerGet);
        app.post('/user/register', userController.registerPost);
    }
};




