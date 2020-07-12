/**
 * Created by siroramirez on 23/05/17.
 */
'use strict'

var mongoose = require('mongoose');
var config = require('../config/config');


mongoose.Promise = global.Promise;
mongoose.connect(config.db.dbUrl, {
  user: config.db.username,
  pass: config.db.password,
  useNewUrlParser: true,
  useUnifiedTopology: false
}); //SDN Local server
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection failed"));
db.once("open", function() {
  console.log("Database conencted successfully!");
});