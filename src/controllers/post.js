const postService = require('../services/post');

const getAllPosts = async (_req, res) => {
    try {
        const posts = await postService.findAll();
        return res.status(200).json(posts);
    } catch (err) {
        return res.status(500).json({ message: 'Erro interno', error: err.message });
    }
};

module.exports = {
    getAllPosts,
};