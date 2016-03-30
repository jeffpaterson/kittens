//app.js
require("locus");
var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var morgan = require('morgan');

    // eval(locus)
// var fs = require('fs');
var cats = [{id:1,name:"Larry",age:3},{id:2,name:"Katty",age:2},{id:3,name:"Sarah",age:5}];

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.use(methodOverride('_method'));

app.use(morgan('dev'));

app.post('/cats/new', function(req, res) {
  res.render("new");
});

app.get('/', function(req, res){
  res.redirect("index.ejs");
});

app.get('/cats', function(req, res) {
  res.render("index", {cats});
});

app.get('/about', function(req, res){
  res.send("Info about cats");
});

app.get('/contact', function(req, res){
  res.send("Reach us at: 888-888-8888, or email cats_324424@gmail.com");
});

app.get('/cats/:id', function(req, res) {
  var cat = cats.find(function(cat){
    cat.name = req.body.name;
    cat.age = req.body.name;
  });
  res.render("show", {cats:cats});
});

// app.delete('/cats/:id', function(req, res){
 
//   cats.splice()

//   res.redirect('/cats');
// });

app.get('/cats/:id/edit', function(req, res) {
  res.render("edit", {cats:cats});
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.render('404');
});

app.listen(3000, function() {
  console.log("Starting a server on localhost:3000....");
});