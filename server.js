require('dotenv').config()
const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

//config app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//models
const models = require('./models');
//sync models
models.sequelize.sync().then(() => {
   console.log('Database is syncronized');
}).catch((err) => {
    console.log(err, 'Error updating the database');
});

//Routes of our app
require('./routes')(app);

//listen port
app.listen(process.env.NODE_PORT, function () {
    console.log('App listening on port '+ process.env.NODE_PORT+ '!');
});
