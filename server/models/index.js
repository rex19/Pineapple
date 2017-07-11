const Sequelize = require('sequelize');
//连接mysql
const sequelize = new Sequelize('pineapple', 'root', '1qaz@wsx', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  timezone:"+08:00",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


// test connect
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

exports.User =  sequelize.define('User',require('./User'));

exports.ProjectsInfoRecord =  sequelize.define('ProjectsInfoRecord',require('./ProjectsInfoRecord'));

//{ force: true }   每次都会删之前的表
//sequelize.sync({ force: true }); 
sequelize.sync();
