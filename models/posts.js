// Create a post that can be viewed by the user.

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    // post title
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    budget: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Post;
};
