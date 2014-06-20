var express = require('express'),
    app = express(),
    port = (process.env.PORT || 3000);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.enable('view cache');
app.engine('html', require('hogan-express'));
//app.use(express.urlencoded());
app.use(express.cookieParser());
app.use(express.session({secret: '1234567890QWERTY'}));

app.get('/', function (req, res) {
  var dataObj = {};

  if (req.session.pet) {
    if (req.session.pet === 'cats') {
      dataObj.cats = 'checked="checked"';
    }
    if (req.session.pet === 'dogs') {
      dataObj.dogs = 'checked="checked"';
    }
  }
  res.header('Cache-Control', 'no-cache, max-age=0, must-revalidate, no-store');
  res.render('step-1.html', dataObj);
});

app.get('/step-2', function (req, res) {
  var dataObj = {};

  if (req.param('pet')) {
    req.session.pet = req.param('pet');
  }
  if (req.session.glassState) {
    if (req.session.glassState === 'halfFull') {
      dataObj.halfFull = 'checked="checked"';
    }
    if (req.session.glassState === 'halfEmpty') {
      dataObj.halfEmpty = 'checked="checked"';
    }
  }
  res.header('Cache-Control', 'no-cache, max-age=0, must-revalidate, no-store');
  res.render('step-2.html', dataObj);
});

app.get('/step-3', function (req, res) {
  var dataObj = {};

  if (req.param('glassState')) {
    req.session.glassState = req.param('glassState');
  }
  if (req.session.sideOfCoin) {
    if (req.session.sideOfCoin === 'heads') {
      dataObj.heads = 'checked="checked"';
    }
    if (req.session.sideOfCoin === 'tails') {
      dataObj.tails= 'checked="checked"';
    }
  }
  res.header('Cache-Control', 'no-cache, max-age=0, must-revalidate, no-store');
  res.render('step-3.html', dataObj);
});

app.get('/step-4', function (req, res) {
  if (req.param('sideOfCoin')) {
    req.session.sideOfCoin = req.param('sideOfCoin');
  }
  res.header('Cache-Control', 'no-cache, max-age=0, must-revalidate, no-store');
  res.render('step-4.html', {});
});

// start the app
app.listen(port);
console.log('');
console.log('Listening on port ' + port);
console.log('');
