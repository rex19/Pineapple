import React, { Component } from 'react';

import { loginUser } from './actions/userAction'

import { connect } from 'react-redux';
// import axios from 'axios';
import { Row, Col, Input, Button } from 'antd';


/*
 class About extends Component {

 constructor(props){
 super(props);
 console.log("1constructor","constructor");
 this.state = {
 time: ""
 };

 //this.someCallback.bind(someCallback)
 }

 componentWillMount(){
 console.log("2componentWillMount","componentWillMount");
 }
 componentDidMount(){
 //ajax
 let self = this ;
 console.log("4componentDidMount","componentDidMount");
 axios.get('http://115.28.6.179:8011/api/v1/courseType/1/course')
 .then(function (response) {
 self.setState({data: response.data.data[0].createdAt });
 console.log("response",response);
 })
 .catch(function (error) {
 console.log(error);
 });
 }

 componentDidUpdate(){
 console.log("componentDidUpdate","componentDidUpdate");
 }

 //事件
 someCallback() {
 console.log("someCallback","someCallback");
 }

 render() {
 console.log("3render","render");
 return (
 <div>
 <Button onClick={this.someCallback}>按钮</Button>
 {this.state.data}
 </div>
 );
 }
 }*/
// const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

/*const wellStyles = {maxWidth: 700, margin: '0 auto 10px'};
style={wellStyles}*/
class About extends Component {

    handleLogin() {
        console.log("role", this.props.role);
        console.log("handleLogin", this.refs.username.refs.input.value);
        console.log("handleLogin", this.refs.password.refs.input.value);
        let username = this.refs.username.refs.input.value;
        let password = this.refs.password.refs.input.value;
        //  console.log("handleLogin",this.refs.password.getValue());
        this.props.loginUser(username, password, "/home");
    }




    render() {
        console.log("3render", "render");
        return (
            <div>
                <Row type="flex" justify="center" style={{ marginBottom: 10, marginTop: 150 }}>
                    <Col span={4}> </Col>
                    <Col span={8}>
                        <div >
                            <div className="well" style={{ backgroundImage: null, backgroundColor: 'white' }} >

                                <Row type="flex" justify="center" style={{ marginBottom: 10, marginTop: 30 }}>
                                    <Col span={4}><a>用户名</a></Col>
                                    <Col span={12}><Input ref="username" placeholder=" " /></Col>
                                </Row>
                                <Row type="flex" justify="center">
                                    <Col span={4}> </Col>
                                    <Col span={4}> </Col>
                                    <Col span={4}> </Col>
                                    <Col span={4}> </Col>
                                </Row>
                                <Row type="flex" justify="center" style={{ marginBottom: 10, marginTop: 10 }}>
                                    <Col span={4}><a>密码</a></Col>
                                    <Col span={12}><Input ref="password" placeholder=" " type="password" /></Col>
                                </Row>
                                <Row type="flex" justify="center" style={{ marginBottom: 10, marginTop: 20 }}>
                                    <Col span={4}> </Col>
                                    <Col span={4}> </Col>
                                    <Col span={2}> </Col>
                                    {/*<Col span={4}> <a href="#" style={{fontSize:12}}>忘记密码</a></Col>*/}
                                    <Col span={4}> <Button onClick={this.handleLogin.bind(this)}>登陆</Button></Col>
                                    <Col span={2}> </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col span={4}> </Col>
                </Row>


            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {

    }
};

//把 login User 方法sent to userAction    2
const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (username, password, redirectTo) => {
            dispatch(loginUser(username, password, redirectTo));

        }
    }
};


//暴露出去 dispatchToProps
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About);
