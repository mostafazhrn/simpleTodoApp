const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const task = require('./models/tasks.js');
const router = require('./routes/tasks.js');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method', {methods: ['POST', ['GET']] }));
mongoose.connect('mongodb://localhost:27017/todo')//, { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/', router);
app.listen(3000, () => {console.log('Server is running on port 3000')});

//went to models/tasks.js to create the schema and model
//const schema = new mongoose.Schema({title: String});
//const Task = mongoose.model('Task', schema);

//insert
//tranfer to controller
/*app.post('/create', (req, res) => {
    const task = new Task({title: req.body.title});
    task.save().then(() => res.redirect('/'));
});
*/
//tranfer to controller
/*app.get('/', async (req, res) => {
    try {
      const tasks = await Task.find({});
      res.render('todo.ejs', {todotasks: tasks});
    } catch (err) {
      console.log(err);
    }
  });
*/
//delete
//transfer to controller
/*app.get('/delete/:id', async (req, res) => {
    try {
      await Task.deleteOne({ _id: req.params.id });
      res.redirect('/');
      console.log('Task deleted by user!');
    } catch (err) {
      console.log(err);
    }
  });
*/
//update
//transfer to controller
/*app.get('/update/:id', async (req, res) => {
      const id = req.params.id;
      //await Task.updateOne({ _id: req.params.id }, { title: req.params.title });
      //res.send('Task updated!');
      const task = await Task.find({});
      res.render('todoEdit.ejs', {todotasks: task, idTask: id});
  });
*/
//transfer to controller

/*app.put('/update/:id', async (req, res) => {
      const id = req.params.id;
      const task = await Task.findByIdAndUpdate(id, { title: req.body.title });
      res.redirect('/');
});
*/

/*

app.get('/update/:id',(req, res) => {
    const id = req.params.id;
    Task.find({}, (err, task) => {
        res.render('todoEdit.ejs', {todotasks: task, idTask: id});
    })
});
*/

//app port

//show page
//app.get('/', (req, res) => {
  //  res.send('<h1> My App </h1>');
//});