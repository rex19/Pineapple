import React from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import {  Link } from 'react-router'

export function requireAuthentication(Component,role) {

    //授权组件 确定账号密码   和页面的权限做对接   是否需要渲染页面，  成功登陆后回到之前页面
    class AuthenticatedComponent extends React.Component {

        componentWillMount () {
            this.checkAuth(this.props.isAuthenticated);
        }

        componentWillReceiveProps (nextProps) {
            this.checkAuth(nextProps.isAuthenticated);
        }

        checkAuth (isAuthenticated) {
            if (!isAuthenticated) {
                let redirectAfterLogin = this.props.location.pathname;
                browserHistory.push(`/?next=${redirectAfterLogin}`);
            }
        }

   /*     forcedReturn(){
            browserHistory.push(`/home`);
            alert("没有权限")
        }*/




        render () {

          // {this.props.isAuthenticated === true && this.props.role === role
          //     ? <Component {...this.props}/>
          //     : null
          // }
            return (
                <div>
                   {
                    ((this.props.isAuthenticated === true
                      && role === this.props.role) || (this.props.isAuthenticated === true
                        && role === false))
                      ? <Component {...this.props}/>
                      :<div><h1>没有权限</h1><Link to={`/home`}>返回</Link></div>
                  }
                </div>
            )
        }
    }

    //把reducers 处理好的state 放到Props    <h1>没有权限  <Link to={`/home`}>返回</Link></h1>
    const mapStateToProps = (state) => {
      return {
          token: state.user.token,
          userName: state.user.userName,
          isAuthenticated: state.user.isAuthenticated,
          role: state.user.role
      }
    };

    return connect(mapStateToProps)(AuthenticatedComponent);

}
