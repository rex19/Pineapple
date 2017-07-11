/**
 * Created by rex.ni on 2017/2/26.
 */
const user = require('../models').User;


exports.findUser = function(obj,cb) {
    if(obj!=null) {

        user.findOne({
            where: {
                username:obj.username,
                password:obj.password,
            },

        }).then(function (data) {
            // console.log("data",data.length);
            // let role = data[0].role;

            return cb(null, data)
        }).catch(function (err) {
            return cb(err, null)
        })
    }
};