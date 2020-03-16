'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    displayName: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Tweet)
  };
  return User;
};
