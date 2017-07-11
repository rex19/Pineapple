const jwt = require('jwt-simple');
const jwtSecret = 'xStmbyc066BOFn40gIr29y09Ud94z1P7';


// 从userAction 的return 的对象 传过来 旧的state和action
const user = (state = {}, action) => {

  switch (action.type) {
    case "LOGIN_USER_SUCCESS":
      //console.log("message",jwt.decode(action.payload.token, jwtSecret).role);

      return {
        //是否登陆成功
        'isAuthenticated': true,
        //加密的字符串  包含账户密码
        'token': action.payload.token,
        //解密出的账户
        'userName': jwt.decode(action.payload.token, jwtSecret).username,
        //是注册用户用的
        isCreateUser: false,
        //解密出的角色字段
        role: jwt.decode(action.payload.token, jwtSecret).role
      };
    case "LOGIN_USER_FAILURE":
      return {
        'isAuthenticated': false,
        'token': null,
        'userName': null,
        isCreateUser: false,
        role: 0
      };
    case "LOGOUT_USER":  {
      return {
        'isAuthenticated': false,
        'token': null,
        'userName': null,
        role: 0
      };
    }
    default:

      return state;
  }
}

export default user;
