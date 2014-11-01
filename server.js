http = require('http');
path = require('path');
express = require('express');
ejs = require('ejs');
app = express();
app.set('port', process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

app.get('/cache', function(req, res) {
	res.render('index', { title: 'Cache' });
});
app.get('/deals', function(req, res) {
	res.render('index', { title: 'Deals' });
});
app.get('/events', function(req, res) {
	res.render('index', { title: 'Events' });
});
app.get('/movies', function(req, res) {
	res.render('index', { title: 'Movies' });
});
app.get('/services', function(req, res) {
	res.render('index', { title: 'Services' });
});
app.get('/stores', function(req, res) {
	res.render('index', { title: 'Stores' });
});

http.createServer(app).listen(app.get('port'), function() {
  return console.log('Express server listening on port ' + app.get('port'));
});