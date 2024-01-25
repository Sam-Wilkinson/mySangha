const { DataTypes } = require("sequelize")

module.exports = (sequelize, DateTypes) => {
  const Users = sequelize.define("Users", {
    displayName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Users;
}