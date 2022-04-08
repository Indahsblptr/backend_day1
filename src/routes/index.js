// instantiate express module
const express = require('express');

// init express router 
const router = express.Router()

// get controller
const {
    getTodos, 
    getTodo, 
    addTodo, 
    updateTodo, 
    deleteTodo,
} = require('../controllers/todo');

const { 
    // addUsers, 
    getUsers, 
    getUser, 
    updateUser, 
    deleteUser, 
    addUsers,
} = require('../controllers/user')

router.get('/todos', getTodos)
router.get('/todo/:id', getTodo)
router.post('/todo', addTodo)
router.patch('/todo/:id', updateTodo)
router.delete('/todo/:id', deleteTodo)

router.post('/user', addUsers);
router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.post('/userr', addUsers);

module.exports = router;
