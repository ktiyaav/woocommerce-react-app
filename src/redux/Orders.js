import * as ActionTypes from './ActionTypes';

export const Orders = (state = {
        isLoading: true,
        errMess: null,
        orders: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_ORDERS:
            return {...state, isLoading:false, errMess:null, orders: action.payload};

        case ActionTypes.ORDERS_LOADING:
            return {...state, isLoading:true, errMess:null};

        case ActionTypes.ORDERS_LOADED:
            return {...state, isLoading:false, errMess:null};
        
        case ActionTypes.ORDERS_FAILED:
            return {...state, isLoading:false, errMess:action.payload};
            
        default:
            return state;
    }
}