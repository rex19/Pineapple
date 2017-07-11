/**
 * Created by rex.ni on 2017/3/1.
 */

const update = (state = {}, action) => {


    switch (action.type) {
        case "UpdateSuccess":

            return {
                'isUpdate': true,

            };
        case "UpdateFailure":


            return {
                'isUpdate': false,

            };
        default:
            return state;
    }


}
export default update;