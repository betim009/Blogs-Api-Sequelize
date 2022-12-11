const { createToken } = require('../auth/validateJWT');
const userService = require('../services/user');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    try {
        await userService.createUser(displayName, email, password, image);
        const token = await createToken(email);

        return res.status(201).json({ token });
    } catch (e) {
        res.status(500).json({ message: 'Ocorreu um erro' });
    }
};

const getUsers = async (_req, res) => {
    try {
        const users = await userService.getUsers();
        return res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Ocorreu um erro' });
    }
};

module.exports = {
    createUser,
    getUsers,
};