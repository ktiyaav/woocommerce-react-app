import * as ActionTypes from './ActionTypes';

export const Login = (state = {
        isLoading: true,
        isLogged: false,
        errMess: null,
        user: []
    }, action) => {
    switch(action.type) {
        
        case ActionTypes.ADD_USER:
            return {...state, isLoading:false, isLogged: true, errMess:null, user: action.payload};

        case ActionTypes.USER_LOADING:
            return {...state, isLoading:true, errMess:null};
        
        case ActionTypes.USER_FAILED:
            return {...state, isLoading:false, errMess:action.payload};
            
        default:
            return state;
    }
}