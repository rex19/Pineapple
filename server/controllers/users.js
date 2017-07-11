/**
 * Created by rex.ni on 2017/2/26.
 */


const users  = require('../services').users;
const jwt = require('jwt-simple');
let jwtSecret = "xStmbyc066BOFn40gIr29y09Ud94z1P7";

exports.loginCheck = function(req, res, next) {

    console.log("username",req.body.username);
    console.log("password",req.body.password);

    let username = req.body.username;
    let password = req.body.password;

    users.findUser({
        username:username,
        password:password,
    },function(err,data){
        if(err){
            res.status(404).send("login fail");
            console.log("error code",err)
        }else{
          let user =  {
                id: data.id,
                username:data.username,
                role:data.role
            }
            let encodedToken = jwt.encode(user, jwtSecret);
            res.send(encodedToken)

        }
    });
    //res.send("ok")
};

/* if(username == "user" && password =="user"){
 let user = {
 id:2,
 username : "user",
 role: 1
 };

 }else if(username == "admin" && password =="admin") {
 let user = {
 id:2,
 username : "admin",
 role: 2
 }
 let encodedToken = jwt.encode(user, jwtSecret);
 res.send(encodedToken)
 }*/
