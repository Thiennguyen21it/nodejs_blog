const express = require('express');
const siteRouter = express.Router();

const siteController = require('../app/controllers/SiteController');

// newsController.index;


siteRouter.use('/search', siteController.search);
siteRouter.use('/', siteController.index);

module.exports = siteRouter ;   

/*
const express = require('express');
const newsRouter = express.Router();

const newsController = require('../app/controllers/NewsController');

// newsController.index;


newsRouter.use('/search', newsController.show);
newsRouter.use('/', newsController.index);

module.exports = newsRouter ; 
*/
