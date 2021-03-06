module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      userId: {
        type: DataTypes.UUID
      },
      cover: DataTypes.STRING,
      title: DataTypes.STRING,
      text: DataTypes.TEXT,
      status: {
        type: DataTypes.STRING,
        defaultValue: 'draft'
      },
      tags: DataTypes.ARRAY(DataTypes.STRING),
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {}
  );
  Post.associate = models => {
    Post.belongsTo(models.User, { foreignKey: 'userId', as: 'author' });
    Post.hasMany(models.Comment, { foreignKey: 'postId', as: 'comments' });
  };
  return Post;
};
