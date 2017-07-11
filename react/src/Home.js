import React, {Component} from 'react';
import {Table} from 'antd';
// import {Link} from 'react-router'
import {connect} from 'react-redux';
import {FindProjectInfo,DeleteProjectInfo,EditProjectInfo} from './actions/homeActive'
/*import { Button } from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap.css';
 import 'bootstrap/dist/css/bootstrap-theme.css';*/
/*import './docs/assets/css/bootstrap.css';
import './docs/assets/css/docs.css';*/
import { browserHistory } from 'react-router';
const {Column} = Table;
let data = [];



class Home extends Component {

    componentDidMount() {
        this.props.FindProjectInfo("/home");
    }

    handleClickDelete(id){
        console.log(" this.props.role",this.props.role);
        if(this.props.role===2){
            this.props.DeleteProjectInfo(id,"/home");
        }else if(this.props.role===0||this.props.role===1) {
            alert("没有权限");
        }
    }

 /*   DeleteSucessed(){
        this.props.FindProjectInfo("/home");
        // this.props.deleted=false
        console.log("deleteSucessed",this.props,this.state,this)
    }
*/


    handleClickEdit(id){
        console.log(" handleEdit");
        this.props.EditProjectInfo(id,"/input");
    }



    render() {
        if(this.props.data){
            console.log("1111");
            let resData = this.props.data;
            data=[];
            for (let i = 0; i < resData.length; i++) {
                data.push({
                    key: i,
                    DBID:resData[i].id,
                    projectName: resData[i].projectName,
                    projectState:  resData[i].projectState,
                    owner: resData[i].owner,
                    endDate:  resData[i].endDate,
                    offer:  resData[i].offer,
                    businessAffairs:  resData[i].businessAffairs,
                    followUpOwner:  resData[i].followUpOwner,
                    priority:  resData[i].priority,
                    production:
                        <span>
                      <a onClick={() => this.handleClickEdit(resData[i].id)}>Edit</a>
                      <span className="ant-divider" />
                      <a onClick={() => this.handleClickDelete(resData[i].id)}>Delete</a>
                    </span>
                });
            }
        }

        return (
            <div>
                <div className="jumbotron masthead ">
                    <div className="container">
                        <h1 style={{marginLeft: 0}}>SmartFlow</h1>
                        <h2> Projects Management </h2>
                        {/*{this.props.deleted === true  ? this.DeleteSucessed().bind(this) :<h7> </h7>}*/}
                    </div>
                </div>

                <div>
                    <Table dataSource={data}>
                        <Column
                            title="项目ID"
                            dataIndex="DBID"
                            key="DBID"
                        />
                        <Column
                            title="项目名称"
                            dataIndex="projectName"
                            key="projectName"
                        />
                        <Column
                            title="状态"
                            dataIndex="projectState"
                            key="projectState"
                        />
                        <Column
                            title="负责人"
                            dataIndex="owner"
                            key="owner"
                        />
                        <Column
                            title="截止日期"
                            dataIndex="endDate"
                            key="endDate"
                        />
                        <Column
                            title="报价"
                            dataIndex="offer"
                            key="offer"
                        />
                        <Column
                            title="商务"
                            dataIndex="businessAffairs"
                            key="businessAffairs"
                        />
                        <Column
                            title="跟进人"
                            key="followUpOwner"
                            dataIndex="followUpOwner"
                        />
                        <Column
                            title="优先级"
                            dataIndex="priority"
                            key="priority"
                        />
                        <Column
                            title="操作"
                            dataIndex="production"
                            key="production"
                        />
                    </Table>
                </div>


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("state.Find.data runSucessed!",state.Find.data);
    // console.log("state.Deleted.SecondData.data runSucessed!", state.Deleted.SecondData);


    return {
        data: state.Find.data,
        // deleted: state.Deleted.isDelete,

    }
};


//把 login User 方法sent to userAction    第二步
const mapDispatchToProps = (dispatch) => {
    return {
        FindProjectInfo: (redirectTo) => {
            dispatch(FindProjectInfo(redirectTo));
        },
        DeleteProjectInfo: (id,redirectTo) => {
            dispatch(DeleteProjectInfo(id,redirectTo));
        },
        EditProjectInfo: (id,redirectTo) => {
            dispatch(EditProjectInfo(id,redirectTo));
        }
    }
};

//暴露出去 dispatchToProps
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)



