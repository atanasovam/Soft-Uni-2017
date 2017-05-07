const express = require('express');
const config = require('./config/config');
const app = express();

let env = 'development';
require('./config/database')(config[env]);
require('./config/express')(app, config[env]);
require('./config/passport')();
require('./config/routes')(app);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false}));
app.use(cookieParser());
app.use(express.static(path.json(_dirname, 'public')));

const config = require('./config/config');

let evn = 'development';
require('./config/datebase')(config[evn]);

module.exports = app;
