const apiController = require('../controllers/apiController');

module.exports = app => {
    app.route('/films/filter')
        .get(apiController.filter);
}