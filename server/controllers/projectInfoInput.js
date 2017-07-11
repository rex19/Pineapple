/**
 * Created by rex.ni on 2017/2/26.
 */
/**
 * Created by rex.ni on 2016/11/3.
 */
//引入业务逻辑proxy层
const projectInfoInput  = require('../services').projectInfoInput;
// const logger = require('../common/logger');

/**
 * //暴露出show方法
 * @param req =request  请求
 * @param res =response 回复
 */
/*exports.show = function(req,res){
    //render出View层的界面
    res.render('productShiftInput');
}*/

//查询
exports.list = function (req,res,next) {

    projectInfoInput.findProjectInfo(function (err,data) {
        if(err) logger.error(err);
        res.send(data);
        // res.render('ShiftInputHistory',{"result":data});
    })
};

//根据id 查询
exports.edit = function(req, res, next) {
    //res.send('ok');
    console.log("id",req.params.id);


    //  console.log("req",req.params.id);
    projectInfoInput.findProjectInfoByID({id:req.params.id},function(err,data){
        if(err){
            res.send("fail")
        }
        res.send(data);
        // res.render("/input",{data:data[0]});
        // res.send('ok');
    })
};
//再修改
exports.update = function(req, res, next) {
    var projectID = req.body.projectID;
    var projectName = req.body.projectName;
    var projectState = req.body.projectState;
    var owner = req.body.owner;
    var endDate = req.body.endDate;
    var offer = req.body.offer;
    var businessAffairs = req.body.businessAffairs;
    var followUpOwner = req.body.followUpOwner;
    var priority = req.body.priority;
    /**
     *将view层的界面传进来的值 一一传到proxy的方法中
     */
    projectInfoInput.updateProjectInfo({
        projectID:projectID,
        projectName:projectName,
        projectState:projectState,
        owner: owner,
        endDate:endDate,
        offer: offer,
        businessAffairs:businessAffairs,
        followUpOwner:followUpOwner,
        priority:priority,
    },function(err,data){
        if(err){
            // console.log("lineId",lineId,"shiftId",shiftId,"productionTimeSpan",productionTimeSpan,"abnormalProductionTimeSpan",abnormalProductionTimeSpan,"cycleTime",cycleTime,"ngQuantity",ngQuantity,"dateRecord",dateRecord)
            res.send("err");//;location.href='/productShiftInput'
            // console.log("error code",err)
        }

        res.send("success");
    });
    //res.send("ok")
};




//删除

//根据id 删除
exports.delete = function(req, res, next) {
    //rs.send('ok');
    console.log("id",req.params.id);

    //res.render('newsadd');
    //  console.log("req",req.params.id);
    projectInfoInput.deleteData({id:req.params.id},function(err,data){
        if(err){
            res.send("fail")
        }
        //res.redirect('/news/list')
        res.send("deleteSucessed")
    })
};


//处理发送过来的信息 post  req.body.name
exports.addInput = function(req, res, next) {
    var projectName = req.body.projectName;
    var projectState = req.body.projectState;
    var owner = req.body.owner;
    var endDate = req.body.endDate;
    var offer = req.body.offer;
    var businessAffairs = req.body.businessAffairs;
    var followUpOwner = req.body.followUpOwner;
    var priority = req.body.priority;
    /**
     *将view层的界面传进来的值 一一传到proxy的方法中
     */
    projectInfoInput.addProjectInfo({
        projectName:projectName,
        projectState:projectState,
        owner: owner,
        endDate:endDate,
        offer: offer,
        businessAffairs:businessAffairs,
        followUpOwner:followUpOwner,
        priority:priority,
    },function(err,data){
        if(err){
            // console.log("lineId",lineId,"shiftId",shiftId,"productionTimeSpan",productionTimeSpan,"abnormalProductionTimeSpan",abnormalProductionTimeSpan,"cycleTime",cycleTime,"ngQuantity",ngQuantity,"dateRecord",dateRecord)
            res.send("err");//;location.href='/productShiftInput'
           // console.log("error code",err)
        }

        res.send("success");
    });
    //res.send("ok")
};

