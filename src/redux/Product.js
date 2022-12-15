import * as ActionTypes from './ActionTypes';

export const Product = (state = {
        isLoading: true,
        errMess: null,
        product: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.LOAD_PRODUCT:
            return {...state, isLoading:false, errMess:null, product: action.payload};

        case ActionTypes.PRODUCT_LOADING:
            return {...state, isLoading:true, errMess:null};

        case ActionTypes.PRODUCT_LOADED:
            return {...state, isLoading:false, errMess:null};
        
        case ActionTypes.PRODUCT_FAILED:
            return {...state, isLoading:false, errMess:action.payload};
            
        default:
            return state;
    }
}