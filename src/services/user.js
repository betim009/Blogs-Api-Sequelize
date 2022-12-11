const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
    const user = await User.create({ displayName, email, password, image });
    return user;
};

const findByEmail = async (email) => {
    const user = await User.findOne({
      where: { email },
    });
    return user;
};

const getUsers = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
};  

module.exports = {
    createUser,
    findByEmail,
    getUsers,
};