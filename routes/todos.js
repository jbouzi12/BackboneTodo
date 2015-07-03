var db = require('../database.js');
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

};

exports.todos.one = function(req, res) {
  var taskId = db.title(req.params.id);
  db.todos.findOne({ "_id" : db.ObjectId(req.params.id) }, function(err, task) {
    if (err) {
      console.log("error occured: ", err);
      return;
    }
    var response = {
      task: task
    };

    res.json(response);

  });
};