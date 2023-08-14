module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        categoryId: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, },
        postId: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, },
    }, 
    {
        timestamps: false,
        tableName: 'posts_categories',
        underscored: true,
    });

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category,
            { foreignKey: 'postId', as: 'categories', through: PostCategory, otherKey: 'categoryId'});
        
        models.Category.belongsToMany(models.BlogPost,
            { foreignKey: 'categoryId', as: 'blog_posts', through: PostCategory, otherKey: 'postId'});
      };
    
    return PostCategory;
};