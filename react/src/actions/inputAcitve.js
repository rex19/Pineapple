/**
 * Created by rex.ni on 2017/2/27.
 */
import axios from 'axios';
// import { browserHistory } from 'react-router';

export function InputSuccess() {
    // console.log("你运行了吗");
    return{
        type:"InputSuccess",
    }
}


export function InputFailure(error) {
    return {
        type: "InputFailure",
    }
}


//保存项目信息发送请求
export function InputProjectInfo(projectName, projectState,owner,endDate,offer, businessAffairs,followUpOwner,priority, redirect = "/") {
    return (dispatch) => {
        axios.post(`http://192.168.1.250:3001/projectInfoInput/addInput`,{
            projectName: projectName,
            projectState: projectState,
            owner: owner,
            endDate: endDate,
            offer: offer,
            businessAffairs: businessAffairs,
            followUpOwner: followUpOwner,
            priority: priority,
        }).then(function(response) {

               // console.log("response",response);
            if(response.data==="success"){
                dispatch(InputSuccess(response));
            }else if(response.data ==="err"){
                dispatch(InputFailure(response));
            }
                //传给reducers

        }).catch(error => {
            //dispatch(loginUserFailure(error));
            //跳转 /home
          console.log("error")

        })
    }
}


export function UpdateSuccess(data) {
    // console.log("你运行了吗");
    return{
        type:"UpdateSuccess",
        data
    }
}


export function UpdateFailure(error) {
    return {
        type: "UpdateFailure",
    }
}

//保存项目信息发送请求
export function EditUpdateProjectInfo(projectID,projectName, projectState,owner,endDate,offer, businessAffairs,followUpOwner,priority, redirect = "/") {
    return (dispatch) => {
        axios.post(`http://192.168.1.250:3001/projectInfoInput/update`,{
            projectID:projectID,
            projectName: projectName,
            projectState: projectState,
            owner: owner,
            endDate: endDate,
            offer: offer,
            businessAffairs: businessAffairs,
            followUpOwner: followUpOwner,
            priority: priority,
        }).then(function(response) {

            // console.log("response",response);
            if(response.data==="success"){
                dispatch(UpdateSuccess(response));
            }else if(response.data ==="err"){
                dispatch(UpdateFailure(response));
            }
            //传给reducers

        }).catch(error => {
            //dispatch(loginUserFailure(error));
            //跳转 /home
            console.log("error")

        })
    }
}