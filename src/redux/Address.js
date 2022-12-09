import * as ActionTypes from './ActionTypes';

export const Address = (state = {
    errMess : null,
    address : []
    }, action) => {
    switch(action.type){
        case ActionTypes.ADD_ADDRESS:
            var address = action.payload; 
            return {...state, address: state.address.concat(address)};
        case ActionTypes.ADDRESS_FAILED:
            return {...state, errMess: action.payload}

        default:
            return state;
    }
}

export const InitalAddress = {
    errMess : null,
    address : [{
        address1: '',
        address2: '',
        city: '',
        state: '',
        country: '',
        zip: '',
        telnum: ''
    }]
};