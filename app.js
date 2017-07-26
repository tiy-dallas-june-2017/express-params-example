const express = require('express');
const mustache = require('mustache-express');
const data = require('./data');

const app = express();

app.use(express.static('public'));

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  res.render('index', data);
});

//This is called routing
app.get('/detail/:id', function(req, res) {

  let person = data.people.find(function(item) {
    return item.id == req.params.id;
  });

  console.log('person', person);

  console.log(req.params);
  
  res.render('detail', person);
});



app.listen(2009, function() {
  console.log('Listening on port 2009');
});
