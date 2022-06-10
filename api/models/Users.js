const { DataTypes, Model } = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../config/dbConnection");

class User extends Model {
    hash(plainPassword, salt) {
        return bcrypt.hash(plainPassword, salt);
      };
}

User.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profilePhoto: {
    type: DataTypes.STRING,
  },
  admin:{
      type: DataTypes.BOOLEAN
  },
  birthDay: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salt: {
    type: DataTypes.STRING,
  },
},{
    sequelize:db,
    modelName: 'user'
});

User.beforeCreate((user) => {
    return bcrypt
      .genSalt(16)
      .then((salt) => {
        user.salt = salt;
        return user.hash(user.password, user.salt);
      })
      .then((hash) => {
        user.password = hash;
      });
  });

const saltRounds = 16;
bcrypt.genSalt(saltRounds).then((salt) => {
  User.salt = salt;
});






module.exports = User