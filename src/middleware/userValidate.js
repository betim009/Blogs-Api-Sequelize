const userService = require('../services/user');

const emailExist = async (req, res, next) => {
    const { email } = req.body;
    const user = await userService.findByEmail(email);
    if (user) {
        return res.status(409).send({ message: 'User already registered' });
    }

    next();
};

const validateUser = (req, res, next) => {
    const { displayName, email, password } = req.body;
    if (!displayName || displayName.length < 8) {
      return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
    } if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return res.status(400).json({ message: '"email" must be a valid email' });
    } if (password.length < 6) {
      return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
    }
    return next();
};
  
module.exports = { 
    validateUser,
    emailExist,
};