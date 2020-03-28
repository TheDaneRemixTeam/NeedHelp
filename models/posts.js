// Create a post that can be viewed by the user.

module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        // post title
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
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
        gigtime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        budget: {
            type: DataTypes.STRING,
            allowNull: false
        },

        claimed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },


        helperID: {
            type: DataTypes.INTEGER,
            allowNull: true
        }


    });

    Post.associate = function(models) {
        Post.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: true
            }
        });
    };

    return Post;
};