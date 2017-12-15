const express = require('express');
const http = require('http');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
 
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(lessMiddleware(path.join(__dirname, '/server/public')));
app.use(express.static(path.join(__dirname, 'dist/app')));

app.get('/', (req, res) => {
  res.senFile(path.join(__dirname, 'app/index.html'));
});

const port = 80;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
