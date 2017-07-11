/**
 * Created by rex.ni on 2017/2/26.
 */
/**
 * Created by rex.ni on 2016/11/3.
 */
const ProjectsInfoRecord = require('../models').ProjectsInfoRecord;
// const Role = require('../models').Role;




//  查询所有,可以以返回到view 层以Table形式展示
exports.findProjectInfo = function(cb) {

    ProjectsInfoRecord.findAll({
        where: {
            deleted:0,
        },
        order: [
            ["createdAt", "asc"]
        ],
    }).then(function(result) {
        return cb(null, result)
    }).catch(function(err) {
        return cb(err, null)
    })
};

//根据ID 先查询，后修改
exports.findProjectInfoByID = function (obj,cb) {
    if(obj!=null) {

        ProjectsInfoRecord.findAll({
            where: {
                id:obj.id,
            },

        }).then(function (data) {
            console.log("data",data.length)
            return cb(null, data)
        }).catch(function (err) {
            return cb(err, null)
        })
    }
};
exports.updateProjectInfo = function(obj,cb) {
    // body...
    console.log("proxy");
    if(obj!=null) {
        ProjectsInfoRecord.update({
            projectName: obj.projectName,
            projectState: obj.projectState,
            owner: obj.owner,
            endDate: obj.endDate,
            offer: obj.offer,
            businessAffairs: obj.businessAffairs,
            followUpOwner: obj.followUpOwner,
            priority: obj.priority,
        }, {
            where: {
                id: obj.projectID
            }
        }).then(function (result) {
            return cb(null, result);
            /**
             * catch error
             */
        }).catch(function (err) {
            return cb(err, null)
        })
    }
};



//根据id删除(update deleted字段)
exports.deleteData = function (obj,cb) {
    //console.log("obj",obj);
    if(obj!=null) {
        ProjectsInfoRecord.update({
            deleted:true
        }, {
            where: {
                id: obj.id
            }
        }).then(function (result) {
            //console.log('updated Data');
            //console.log(result);
            return cb(null, result)
        }).catch(function (err) {
            return cb(err, null)
        })
    }
};

/**
 * 将Controllers层的数据传入到create方法 写入到数据库中
 * @param obj 传入的object
 * @param cb callback
 */
exports.addProjectInfo = function(obj,cb) {
    // body...
    console.log("proxy");
    Promise.all([
        ProjectsInfoRecord.create({
            projectName: obj.projectName,
            projectState: obj.projectState,
            owner: obj.owner,
            endDate: obj.endDate,
            offer: obj.offer,
            businessAffairs:obj.businessAffairs,
            followUpOwner:obj.followUpOwner,
            priority: obj.priority,
            isProcessed:0,
            deleted:0
        })
        /**
         * 回调
         */
    ]).then(function(result) {
        return cb(null, result);
        /**
         * catch error
         */
    }).catch(function(err) {
        return cb(err, null)
    })
};



