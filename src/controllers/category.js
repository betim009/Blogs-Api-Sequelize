const categoryService = require('../services/category');

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) return res.status(400).json({ message: '"name" is required' });
        
        const category = await categoryService.createCategory(name);
        return res.status(201).json(category);
    } catch (err) {
        return res.status(500).json({ message: 'Erro interno', error: err.message });
    }
};

const getCategories = async (_req, res) => {
    try {
        const categories = await categoryService.getCategories();
        return res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ message: 'Ocorreu um erro' });
    }
};

module.exports = {
    createCategory,
    getCategories,
};