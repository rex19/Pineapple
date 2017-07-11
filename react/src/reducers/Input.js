/**
 * Created by rex.ni on 2017/2/27.
 */


const input = (state = {}, action) => {

    switch (action.type) {
        case "InputSuccess":

            return {
                'isAdd': true,

            };
        case "InputFailure":


            return {
                'isAdd': false,

            };
        default:
            return state;
    }


}
export default input;