var express = require('express')
var exphbs = require('express-handlebars');

var app = express()
app.use(express.static('public'))
app.engine('.hbs.html', exphbs({defaultLayout: 'layout', extname: '.hbs.html'}));
app.set('view engine', '.hbs.html');

app.get('/', function(req, res) {
    res.render('index')
})

app.listen(3000, '0.0.0.0', function() {
    console.log('Example app listening on port 3000!')
})
