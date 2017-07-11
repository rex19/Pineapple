/**
 * Created by rex.ni on 2017/2/28.
 */


const edit = (state = {
    "data":[{
        projectID:"",
        projectName:"",
        projectState:"",
        owner:"",
        endDate:"",
        offer: "",
        businessAffairs: "",
        followUpOwner: "",
        priority: "",
    }]
}, action) => {

    switch (action.type) {
        case "EditSuccess":
            console.log("EditSuccess");

            return {
                'data': action.data,

            };
        case "EditFailure":


            return {
                'isEdit': false,

            };
        default:
            return state;
    }
};
export default edit;