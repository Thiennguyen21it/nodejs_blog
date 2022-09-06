
const siteRouter = require('./site');
const newsRouter = require('./news')


function routes(app){
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
    
}

module.exports = routes