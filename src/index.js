const path  = require('path');
const express = require('express')
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { extname } = require('path');
const app = express()
const port = 3000 ;

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//templates engines
app.engine('handlebars',  handlebars.engine({ defaultLayout: 'main' } ));

app.set('view engine', 'handlebars');

app.set('views' , path.join(__dirname, 'resources/views'));


app.get('/', function (req, res) {
  res.render('home');
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
  