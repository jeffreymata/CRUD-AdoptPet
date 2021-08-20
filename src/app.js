const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

// connection to db
mongoose.connect('mongodb+srv://Keneth:Lapuertanegra2021@adoptpetcluster.hrxsv.mongodb.net/AdoptPet', { useNewUrlParser: true, useUnifiedTopology: true });

// importing routes
const indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());
// routes
app.use('/', indexRoutes);



app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
  console.log(mongoose.connection.readyState);
});
