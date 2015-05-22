// include Sequelize
var Sequelize = require('sequelize');

//pull database URI from environment
var dbURI = process.env.DATABASE_URL;

//create new sequelize instance
var sequelize = new Sequelize(dbURI);

var User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

var Meditation = sequelize.define('meditation', {
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  comments: {
    type: Sequelize.TEXT,
    allowNull: true
  }
});

User.hasMany(Meditation);
Meditation.belongsTo(User);

sequelize.sync();

module.exports = {
  User: User,
  Meditation: Meditation
};
