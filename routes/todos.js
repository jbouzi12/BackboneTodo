var db = require('../database.js');
exports.todos = {};

exports.index = function(req, res) {
  db.todos.find(function(err, todos) {
    var data = JSON.stringify(todos);
    res.render("index", {
      appData: data
    });
  });
};

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

exports.todos.create = function(req, res) {
  res.json(req.body);
  db.todos.save({
    title: req.body.title,
    completed: false
  });
  // res.redirect('/');
};

exports.todos.del = function(req, res) {
  var taskId = db.ObjectId(req.params.id);
  res.json(req.body);
  db.todos.remove({'_id':taskId}, function(err, task){
    if (err) {
      console.log('error occured: ', err);
      return;
    }
    // res.send(task);
  });
};