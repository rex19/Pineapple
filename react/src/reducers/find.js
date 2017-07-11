/**
 * Created by rex.ni on 2017/2/27.
 */

const find = (state = {}, action) => {

    switch (action.type) {
        case "FindSuccess":

            return {
                'data': action.data,

            };
        case "FindFailure":


            return {
                'isFind': false,

            };
        default:
            return state;
    }


};
export default find;