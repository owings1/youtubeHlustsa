'use strict';
module.exports = function(app) {
  var hlusta = require('../controllers/hlustaController.js');

//Youtube hlusta routes

  app.route('/urls/get_records')
      .get(hlusta.get_records);

  app.route('/urls/get_record/:id')
      .get(hlusta.get_record);

  app.route('/urls/clear_backups')
      .get(hlusta.clear_backups);

  app.route('/urls/get_file/')
      .post(hlusta.receive_url);
};

