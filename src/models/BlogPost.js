module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        userId: { type: DataTypes.INTEGER, foreignKey: true },
        title: { type: DataTypes.STRING, allowNull: false },
        content: { type: DataTypes.STRING, allowNull: false },
        published: { type: DataTypes.DATE, allowNull: false },
        updated: { type: DataTypes.DATE, allowNull: false }
    }, 
    {
        timestamps: false,
        tableName: 'blog_posts',
        underscored: true,
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User,
          { foreignKey: 'userId', as: 'user' });
      };
    
    return BlogPost;
};