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
