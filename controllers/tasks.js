const Task = require('../models/tasks.js');
module.exports = {
    index: async (req, res) => {
        try {
          const tasks = await Task.find({});
          res.render('todo.ejs', {todotasks: tasks});
        } catch (err) {
          console.log(err);
        }
      },
    create: async (req, res) => {
        const task = new Task({title: req.body.title});
        await task.save();
        res.redirect('/');
    },
    edit: async (req, res) => {
        const id = req.params.id;
        const task = await Task.find({});
        res.render('todoEdit.ejs', {todotasks: task, idTask: id});
    },
    update: async (req, res) => {
        const id = req.params.id;
        const task = await Task.findByIdAndUpdate(id, { title: req.body.title });
        res.redirect('/');
  },
    delete: async (req, res) => {
        try {
          await Task.deleteOne({ _id: req.params.id });
          res.redirect('/');
          console.log('Task deleted by user!');
          
        } catch (err) {
          console.log(err);
        }
      }
    
}
