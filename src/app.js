const express = require('express');

const loginController = require('./controllers/login');
const userController = require('./controllers/user');
const categoryController = require('./controllers/category'); 

const { validateLogin } = require('./middleware/loginValidate');
const { validateUser, emailExist } = require('./middleware/userValidate');
const { validateToken } = require('./auth/validateJWT');

const app = express();

app.use(express.json());

// ...
app.get('/user', validateToken, userController.getUsers);
app.get('/user/:id', validateToken, userController.getById);
app.post('/user', emailExist, validateUser, userController.createUser);

app.post('/login', validateLogin, loginController.login);

app.post('/categories', validateToken, categoryController.createCategory);

module.exports = app;
