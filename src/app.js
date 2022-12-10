const express = require('express');

const loginController = require('./controllers/login');
const { validateLogin } = require('./middleware/loginValidate');

const app = express();

app.use(express.json());

// ...
app.post('/login', validateLogin, loginController.login);

module.exports = app;
