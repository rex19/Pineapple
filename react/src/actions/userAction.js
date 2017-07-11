import axios from 'axios';
import { browserHistory } from 'react-router';

export function loginUserSuccess(token) {
  //保存到浏览器当中 localStorage
  localStorage.setItem('token', token);
  return {
    type: "LOGIN_USER_SUCCESS",
    payload: {
      token: token
    }
  }
}


export function loginUserFailure(error) {
  //移除 token
  localStorage.removeItem('token');
  return {
    type: "LOGIN_USER_FAILURE",
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}

//退出
export function logout() {
  //移除token
  localStorage.removeItem('token');
  return {
    type: "LOGOUT_USER"
  }
  browserHistory.push("/");
}



//登陆发送请求   ajax    3
export function loginUser(username, password, redirect = "/") {
  return (dispatch) => {
    axios.post(`http://192.168.1.250:3001/users/login`,{
      username: username,
      password: password
    }).then(function(response) {
      //自定义的代码，  后台返回结果是失败了
      if (response.status !== 200 && response.data.meta.code !== 200) {
        throw new Error("Bad response from server");
      }
      return response.data;
      //try  dispatch 运行的报错
    }).then(function(response) {
      try {

        // console.log("response",response);

        //传给reducers
        dispatch(loginUserSuccess(response));
        browserHistory.push(redirect);

      } catch (e) {
        dispatch(loginUserFailure({
          response: {
            status: 403,
            statusText: 'Invalid token'
          }
        }));
      }
    }).catch(error => {
      dispatch(loginUserFailure(error));
      //跳转 /home
      alert('账户密码错误');
      //报错 登陆密码失败
      browserHistory.push("/");
    })
  }
}
