var dbUrl = "todo";
var collections = ["todos"];
var mongojs = require('mongojs');
var db = mongojs(dbUrl, collections);

module.exports = db;