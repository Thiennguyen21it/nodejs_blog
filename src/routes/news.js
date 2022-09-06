const express = require('express');
const newsRouter = express.Router();

const newsController = require('../app/controllers/NewsController');

// newsController.index;


newsRouter.use('/search', newsController.show);
newsRouter.use('/', newsController.index);

module.exports = newsRouter ;  

