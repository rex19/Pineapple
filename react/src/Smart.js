/**
 * Created by rex.ni on 2017/2/25.
 */

import React, { Component } from 'react';
import { Row,Col,Input,Button} from 'antd';
// import { Row,Col,Input,DatePicker,Select,Button} from 'antd';
import { InputProjectInfo } from './actions/inputAcitve'
import {  Link } from 'react-router'
import { connect } from 'react-redux';
const wellStyles = {maxWidth: 700, margin: '0 auto 10px'};
import { browserHistory } from 'react-router';
/*import moment from 'moment';
 const dateFormat = 'YYYY/MM/DD';
 const Option = Select.Option;*/

class Input1 extends Component {

    handleSave(){
        /*        console.log("handleSave",this.refs.projectName.refs.input.value);
         console.log("handleSave2",this.refs.endDate.refs.input.value);*/
        // console.log("handleSave",this.refs.owner.refs.DatePicker.value);
        let projectName = this.refs.projectName.refs.input.value;
        let projectState = this.refs.projectState.refs.input.value;
        let owner = this.refs.owner.refs.input.value;
        let endDate = this.refs.endDate.refs.input.value;
        let offer = this.refs.offer.refs.input.value;
        let businessAffairs = this.refs.businessAffairs.refs.input.value;
        let followUpOwner = this.refs.followUpOwner.refs.input.value;
        let priority = this.refs.priority.refs.input.value;
        //  console.log("handleLogin",this.refs.password.getValue());
        this.props.InputProjectInfo(projectName, projectState,owner,endDate,offer, businessAffairs,followUpOwner,priority,"/Input");
    }

    SaveSucessed(){
        alert("保存成功");
        browserHistory.push('/home');
    }

    render(){
        return(
            <div>
                <div className="jumbotron masthead ">
                    <div className="container">
                        <h1 style={{marginLeft:0}}>SmartFlow</h1>
                        <h2> Projects Management </h2>
                    </div>
                </div>

                <div className="well"  style={wellStyles}>
                    <Row type="flex" justify="center" style={{marginTop:10}}>
                        <Col span={4}><a style={{fontSize:14}}>项目名称:</a></Col>
                        <Col span={5}><Input ref="projectName"  size="small" placeholder=" "  /></Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop:10}}>
                        <Col span={4}><a style={{fontSize:14}}>状态:</a></Col>
                        <Col span={5}>
                            <Input ref="projectState"  size="small" placeholder=" "  />
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop:10}}>
                        <Col span={4}><a style={{fontSize:14}}>负责人:</a></Col>
                        <Col span={5}>
                            <Input ref="owner"  size="small" placeholder=" "  />
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop:10}}>
                        <Col span={4}><a style={{fontSize:14}}>截止日期:</a></Col>
                        <Col span={5}><Input ref="endDate"  size="small" placeholder=" "  /></Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop:10}}>
                        <Col span={4}><a style={{fontSize:14}}>报价:</a></Col>
                        <Col span={5}><Input  ref="offer" size="small" placeholder=" " /></Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop:10}}>
                        <Col span={4}><a style={{fontSize:14}}>商务:</a></Col>
                        <Col span={5}><Input ref="businessAffairs"  size="small"  placeholder=" " /></Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop:10}}>
                        <Col span={4}><a style={{fontSize:14}}>跟进人:</a></Col>
                        <Col span={5}>
                            <Input ref="followUpOwner"  size="small" placeholder=" "  />
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop:10}}>
                        <Col span={4}><a style={{fontSize:14}}>优先级:</a></Col>
                        <Col span={5}>
                            <Input ref="priority"  size="small" placeholder=" "  />
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop:10}}>
                        <Col span={3}> </Col>
                        <Col span={2}><Button type="primary" onClick={this.handleSave.bind(this)}>保存</Button></Col>
                        <Col span={2}> </Col>
                        <Col span={2}><Button><Link to={`/home`}>返回</Link></Button></Col>
                        <Col span={2}> </Col>
                    </Row>
                </div>

                {this.props.add === true  ? this.SaveSucessed().bind(this) :<h7> </h7>}
                {/*<Row type="flex" justify="start">
                    <Col span={24}>
                        <footer className="footer" style={{marginTop:0}}>
                            <p>版权所有 翊流智能 </p>
                            <p>Copyright By SmartFlow Team <a href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache License v2.0</a></p>
                        </footer>
                    </Col>
                </Row>*/}
            </div>
        )
    }
}




const mapStateToProps = (state) => {

    return {
        add: state.Input.isAdd,
    }
};



//把 login User 方法sent to userAction    2
const mapDispatchToProps = (dispatch) =>{
    return {
        InputProjectInfo:(projectName, projectState,owner,endDate,offer, businessAffairs,followUpOwner,priority, redirectTo) => {
            dispatch(InputProjectInfo(projectName, projectState,owner,endDate,offer, businessAffairs,followUpOwner,priority, redirectTo));

        }
    }
};


//暴露出去 dispatchToProps
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Input1);
