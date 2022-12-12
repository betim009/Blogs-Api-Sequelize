const postService = require('../services/post');

const createPost = async (req, res) => {
    try {
        const { title, content, categoryIds } = req.body;

        if (!title || !content || !categoryIds) {
            return res.status(400).json({ message: 'Some required fields are missing' });
        }
    } catch (err) {
        console.log(err);
    }
};

const getAllPosts = async (_req, res) => {
    try {
        const posts = await postService.findAll();
        return res.status(200).json(posts);
    } catch (err) {
        return res.status(500).json({ message: 'Erro interno', error: err.message });
    }
};

module.exports = {
    createPost,
    getAllPosts,
};