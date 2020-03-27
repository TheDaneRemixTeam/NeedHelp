/* eslint-disable indent */
/* eslint-disable prettier/prettier */
// bcrypt for password hashing
var bcrypt = require("bcryptjs");

// Create the user model
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        // First name
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Last Name
        lastname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    User.associate = function(models) {
        User.hasMany(models.Post, {
            onDelete: "CASCADE"
        });
    };

    // method that will compare the unhased password entered by the user matches the one in the database
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    
    // This method will hash the users password to protect it from unscrupulous types.
    User.beforeCreate(function(user) {
        user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
        );
    });

    return User;
};