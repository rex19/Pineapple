/**
 * Created by rex.ni on 2017/2/27.
 */
import axios from 'axios';
import { browserHistory } from 'react-router';

export function FindSuccess(data) {
    // console.log("FindSuccess,data",data);
    return{
        type:"FindSuccess",
        data
    }
}


export function FindFailure(error) {
    return {
        type: "FindFailure",
    }
}


//保存项目信息发送请求
export function FindProjectInfo(redirect = "/") {
    return (dispatch) => {
        axios.get(`http://192.168.1.250:3001/projectInfoInput/list`,{

        }).then(function(response) {

            // console.log("response",response);
            if(response.data){
                // console.log("11111response",response.data);
                dispatch(FindSuccess(response.data));
            }else if(response.data ===null){
                dispatch(FindFailure());
            }
            //传给reducers

        }).catch(error => {
            //dispatch(loginUserFailure(error));
            //跳转 /home
            console.log("find List error")

        })
    }
}


export function DeleteSuccess(data) {
    // console.log("DeleteSuccess,data");
    return{
        type:"DeleteSuccess",
        data
    }
}


export function DeleteFailure(error) {
    return {
        type: "DeleteFailure",
    }
}


export function DeleteProjectInfo(id,redirect = "/") {
  console.log("DeleteProjectInfo homeActive",id);
    return (dispatch) => {
        axios.get(`http://192.168.1.250:3001/projectInfoInput/delete/`+id,{

        }).then(function(response) {

            // console.log("response",response);

            if(response.data){
                dispatch(FindProjectInfo());

              /*  axios.get(`http://192.168.1.250:3001/projectInfoInput/list`,{
                }).then(function(response) {
                    dispatch(DeleteSuccess(response.data));
                }).catch(error => {
                    //dispatch(loginUserFailure(error));
                    //跳转 /home
                    console.log("delete reFind list error")

                })*/

            }else if(response.data ===null){
                dispatch(DeleteFailure());
            }
            //传给reducers

        }).catch(error => {
            //dispatch(loginUserFailure(error));
            //跳转 /home
            console.log("delete error")

        })
    }
}

export function EditSuccess(data) {
    return{
        type:"EditSuccess",
        data
    }
}


export function EditFailure(error) {
    return {
        type: "EditFailure",
    }
}



export function EditProjectInfo(id,redirect = "/") {
    return (dispatch) => {
        axios.get(`http://192.168.1.250:3001/projectInfoInput/edit/`+id,{

        }).then(function(response) {

            if(response.data){
                dispatch(EditSuccess(response.data));
                browserHistory.push(redirect);
            }else if(response.data ===null){
                dispatch(EditFailure());
            }
            //传给reducers

        }).catch(error => {
            //dispatch(loginUserFailure(error));
            //跳转 /home
            console.log("Edit error",error)
        })
    }
}

