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
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '用户名'
    },
    role:{
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '角色'
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '用户密码'
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: '是否正常状态'
    }
};
