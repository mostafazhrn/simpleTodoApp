const Taskscontroller = require('../controllers/tasks');
const router = require('express').Router();

//view
router.get('/', Taskscontroller.index);

//create
router.post('/create', Taskscontroller.create);

//delete
router.get('/delete/:id', Taskscontroller.delete);

//update
router.get('/update/:id', Taskscontroller.edit);
router.put('/update/:id', Taskscontroller.update);

module.exports = router;

