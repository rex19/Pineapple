/**
 * Created by rex.ni on 2017/2/25.
 */

import React, {Component} from 'react';
import {Row, Col, Input, Button} from 'antd';
// import { Row,Col,Input,DatePicker,Select,Button} from 'antd';
import {EditUpdateProjectInfo} from './actions/inputAcitve'
import {Link} from 'react-router'
import {connect} from 'react-redux';
const wellStyles = {maxWidth: 700, margin: '0 auto 10px'};

/*import moment from 'moment';
 const dateFormat = 'YYYY/MM/DD';
 const Option = Select.Option;*/

class Input1 extends Component {


    handleSave() {
        /*        console.log("handleSave",this.refs.projectName.refs.input.value);
         console.log("handleSave2",this.refs.endDate.refs.input.value);*/
        // console.log("handleSave",this.refs.owner.refs.DatePicker.value);
        let projectID = this.refs.projectID.refs.input.value;
        let projectName = this.refs.projectName.refs.input.value;
        let projectState = this.refs.projectState.refs.input.value;
        let owner = this.refs.owner.refs.input.value;
        let endDate = this.refs.endDate.refs.input.value;
        let offer = this.refs.offer.refs.input.value;
        let businessAffairs = this.refs.businessAffairs.refs.input.value;
        let followUpOwner = this.refs.followUpOwner.refs.input.value;
        let priority = this.refs.priority.refs.input.value;
        if(projectID!=""&&projectName!=""&&projectState!=""&&owner!=""&&endDate!=""&&offer!=""&&businessAffairs!=""&&followUpOwner!=""&&priority!=""){
            this.props.EditUpdateProjectInfo(projectID,projectName, projectState, owner, endDate, offer, businessAffairs, followUpOwner, priority, "/Input");
        }else {
            alert("不能为空");
        }
        //  console.log("projectName11111111111111",projectName);
    }

/*    handle123() {
        // console.log("打印props", this.props.PROJECTNAME)
    }*/

    /*    componentWillReceiveProps(nextProps) {
     console.log('nextProps  nextProps', nextProps);
     this.setState({
     Pname: this.props.PROJECTNAME,


     });
     }*/

    render() {

        console.log("reder", this.props.projectName);
        return (
            <div>
                <div className="jumbotron masthead ">
                    <div className="container">
                        <h1 style={{marginLeft: 0}}>SmartFlow</h1>
                        <h2> Projects Management </h2>
                    </div>
                </div>

                <div className="well" style={wellStyles}>
                    <Row type="flex" justify="center" style={{marginTop: 10}}>
                        <Col span={4}><a style={{fontSize: 14}}>项目ID:</a></Col>
                        <Col span={5}><Input ref="projectID" size="small" placeholder=" "
                                             value={this.props.projectID}/></Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop: 10}}>
                        <Col span={4}><a style={{fontSize: 14}}>项目名称:</a></Col>
                        <Col span={5}><Input ref="projectName" size="small" placeholder=" "
                                             defaultValue={this.props.projectName}/></Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop: 10}}>
                        <Col span={4}><a style={{fontSize: 14}}>状态:</a></Col>
                        <Col span={5}>
                            <Input ref="projectState" size="small" placeholder=" "  defaultValue={this.props.projectState} />
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop: 10}}>
                        <Col span={4}><a style={{fontSize: 14}}>负责人:</a></Col>
                        <Col span={5}>
                            <Input ref="owner" size="small" placeholder=" "  defaultValue={this.props.owner}  />
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop: 10}}>
                        <Col span={4}><a style={{fontSize: 14}}>截止日期:</a></Col>
                        <Col span={5}><Input ref="endDate" size="small" placeholder=" "  defaultValue={this.props.endDate} /></Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop: 10}}>
                        <Col span={4}><a style={{fontSize: 14}}>报价:</a></Col>
                        <Col span={5}><Input ref="offer" size="small" placeholder=" "  defaultValue={this.props.offer} /></Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop: 10}}>
                        <Col span={4}><a style={{fontSize: 14}}>商务:</a></Col>
                        <Col span={5}><Input ref="businessAffairs" size="small" placeholder=" "  defaultValue={this.props.businessAffairs} /></Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop: 10}}>
                        <Col span={4}><a style={{fontSize: 14}}>跟进人:</a></Col>
                        <Col span={5}>
                            <Input ref="followUpOwner" size="small" placeholder=" "  defaultValue={this.props.followUpOwner} />
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop: 10}}>
                        <Col span={4}><a style={{fontSize: 14}}>优先级:</a></Col>
                        <Col span={5}>
                            <Input ref="priority" size="small" placeholder=" "  defaultValue={this.props.priority} />
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop: 10}}>
                        <Col span={3}> </Col>
                        <Col span={2}><Button type="primary" onClick={this.handleSave.bind(this)}>保存</Button></Col>
                        <Col span={2}> </Col>
                        <Col span={2}><Button><Link to={`/home`}>返回</Link></Button></Col>
                        {this.props.update === true  ? location.reload() :<h7> </h7>}
                    </Row>

                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
   /* console.log("run,editInfo", state.Edit.data);
    console.log("state", state);*/
    return {
        update: state.Update.isUpdate,
        projectID:state.Edit.data[0].id,
        projectName: state.Edit.data[0].projectName,
        projectState: state.Edit.data[0].projectState,
        owner: state.Edit.data[0].owner,
        endDate: state.Edit.data[0].endDate,
        offer: state.Edit.data[0].offer,
        businessAffairs: state.Edit.data[0].businessAffairs,
        followUpOwner: state.Edit.data[0].followUpOwner,
        priority: state.Edit.data[0].priority,
    }
};

//把 login User 方法sent to userAction    2
const mapDispatchToProps = (dispatch) => {
    return {
        EditUpdateProjectInfo: (projectID,projectName, projectState, owner, endDate, offer, businessAffairs, followUpOwner, priority, redirectTo) => {
            dispatch(EditUpdateProjectInfo(projectID,projectName, projectState, owner, endDate, offer, businessAffairs, followUpOwner, priority, redirectTo));

        }
    }
};


//暴露出去 dispatchToProps
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Input1);
