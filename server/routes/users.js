var express = require('express');
var router = express.Router();
const jwt = require('jwt-simple');
let jwtSecret = "xStmbyc066BOFn40gIr29y09Ud94z1P7";

const users = require('../controllers/users');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.post('/login',users.loginCheck);

/* GET users listing. */
/*router.post('/login', function(req, res, next) {

  console.log("username",req.body.username);
  console.log("password",req.body.password);

  let username = req.body.username;
  let password = req.body.password;
  //sequelize 查询 username password
  //

   /// 1 代表 user   2 admin
  if(username == "user" && password =="user"){
    let user = {
      id:2,
      username : "user",
      role: 1
    }
    let encodedToken = jwt.encode(user, jwtSecret);
    res.send(encodedToken)
  }else if(username == "admin" && password =="admin") {
    let user = {
      id:2,
      username : "admin",
      role: 2
    }
    let encodedToken = jwt.encode(user, jwtSecret);
    res.send(encodedToken)
  }else {
    res.status(404).send("login fail")
  }


  res.send("ok");


});*/

module.exports = router;
