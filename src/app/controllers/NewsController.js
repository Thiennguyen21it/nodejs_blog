class NewsController {
    index(req ,res) {
        res.render('news');
    }

    show(req, res) {
        res.send('detel');
    }
}

module.exports = new NewsController; 
