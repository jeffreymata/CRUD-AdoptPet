const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// connection to db
mongoose.connect('mongodb://localhost/AdoptPet')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

// importing routes
const indexRoutes = require('./routes/index');
const adoptRoutes = require('./routes/adopcion');
const userRoutes = require('./routes/usuario');
const donacionRoutes = require('./routes/donacion');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
// routes
app.use('/', indexRoutes);
app.use('/adopcion', adoptRoutes);
app.use('/usuario', userRoutes);
app.use('/donacion', donacionRoutes);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
