var db = require('../database.js');
exports.todos = {};

exports.todos.all = function(req, res) {
    db.todos.find(function(err, tasks) {
    if (err) {
      console.log('error occured: ', error);
      return;
    }
    res.json(tasks);
  });

};

exports.todos.one = function(req, res) {
  var taskId = db.ObjectId(req.params.id);
  db.todos.findOne({ "_id" : taskId }, function(err, task) {
    if (err) {
      console.log("error occured: ", err);
      return;
    }

    res.json(task);

  });
};