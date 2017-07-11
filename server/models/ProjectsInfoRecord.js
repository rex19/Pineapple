/**
 * Created by rex.ni on 2017/2/26.
 */
const Sequelize = require('sequelize');
const DataTypes = require('sequelize').DataTypes;

//数据模型
module.exports = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    projectName: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '项目名'
    },
    projectState: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '项目状态'
    },
    owner: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '负责人'
    },
    endDate: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '截止日期'
    },
    offer: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '报价'
    },
    businessAffairs: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '商务'
    },
    followUpOwner: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '跟进人'
    },
    priority: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '优先级'
    },
    isProcessed: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '跟进人'
    },
    deleted: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '优先级'
    }
};
