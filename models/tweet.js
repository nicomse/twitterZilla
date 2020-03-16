'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    tweet: DataTypes.STRING
  }, {});
  Tweet.associate = function(models) {
    models.User.belongsTo(models.User)
  };
  return Tweet;
};
