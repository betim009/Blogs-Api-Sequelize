const { createToken } = require('../auth/validateJWT');
const userService = require('../services/login');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.getByEmailAndPassword(email, password);

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    const token = await createToken(email);

    return res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro', error: err.message });
  }
};

module.exports = {
  login,
};