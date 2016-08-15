// EXTERNAL MODULES //
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

// CONFIG //
var config = require('./config');


// SERVICES //
var passport = require('./services/passport');

//================== AUTH (separate auth fn in adminCtrl)==========================
// POLICIES //
var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};

// function ensureLoggedIn(req, res, next){
//    if (!req.user){
//       return res.status(403).send("You must be logged in to use this");
//    }
//    next();
// }
//=================================================

// EXPRESS //
var app = express();

app.use(express.static(__dirname + './../public')); //serves up front end files
app.use(bodyParser.json());

// SESSION AND PASSPORT
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

//PASSPORT ENDPOINTS
// app.post('/login', passport.authenticate('local', {
//   successRedirect: '/me'
// }));
// app.get('/logout', function(req, res, next) {
//   req.logout();
//   return res.status(200).send('logged out');
// });

//REGISTER



// USER ENDPOINTS TO DO
// app.get('/getToDo', ToDoCtrl.readToDo);
// app.post('/addToDo', isAuthed, ToDoCtrl.createToDo);
// app.put('/updateToDo/:id', isAuthed, ToDoCtrl.update);
// app.delete('/deleteToDo/:id', isAuthed, ToDoCtrl.deleteToDo);

// ADMIN ENDPOINTS POSTS
// app.get('/api/posts', AdminCtrl.getPostData)
// app.get('/api/projects', AdminCtrl.getProjectData)
// app.post('/api/addposts', isAuthed, AdminCtrl.addPost)
// app.post('/api/addprojects', isAuthed, AdminCtrl.addProject)
// app.delete('/api/deletepost/:id', isAuthed, AdminCtrl.deletePost)
// app.delete('/api/deleteproject/:id', isAuthed, AdminCtrl.deleteProject)









// CONNECTIONS //
var mongoURI = config.MONGO_URI;
var port = config.PORT;

mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('Connected to Mongo DB at', mongoURI);
  app.listen(port, function() {
    console.log('Listening on port '+ port);
  });
});
