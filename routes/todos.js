var db = require('database.js');
exports.todos = {};

exports.todos.all = function(req, res) {
    db.todos.find({}, function(err, tasks) {
    if (err) {
      console.log('error occured: ', error);
      return;
    }
    var response = {
      tasks: tasks
    };
    res.json(response);
  });

}