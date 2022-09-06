const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { extname } = require('path');
const app = express();
const port = 3000;
const route = require('./routes');

const db =  require('./config/db');
const routes = require('./routes');
//connect to db

db.connect();


app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//localhost - Hosting
//Action --> Dispatcher --> Funtion handler

//HTTP logger
app.use(morgan('combined'));

//templates engines
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'resources/views'));


route(app);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`),
);
