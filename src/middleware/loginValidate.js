const isBodyValid = (email, password) => email && password;

const validateLogin = (req, res, next) => {
    const { email, password } = req.body;
    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    return next();
  };
  
module.exports = { 
  validateLogin,
};