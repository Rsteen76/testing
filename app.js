const express             = require('express');
require('dotenv').config()
const path                = require('path');
const cookieParser        = require('cookie-parser');
const bodyParser          = require('body-parser');
const mongoose            = require('mongoose');
const cors                = require('cors')
const morgan              = require('morgan');
const app                 = express();

app.use(cors())


// const index = require('./server/routes/index');
const { apiRoutes } = require('./server/routes/index')
const { webRoutes } = require('./server/routes/index')


// Use native ES6 Promises since mongoose's are deprecated.
mongoose.Promise = global.Promise


// Connect to the database
mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true
    }, () => {
  console.log("DB is connected");
});

// Fail on connection error.
mongoose.connection.on('error', error => { throw error });

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'apple.jpg')));
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));


app.use('/api', apiRoutes);
app.use('/web', webRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
});

module.exports = app;

console.log('App running on http://localhost: ', process.env.PORT)