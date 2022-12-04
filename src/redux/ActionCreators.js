import { act } from 'react-dom/test-utils';
import API from '../config/constants';
import * as ActionTypes from './ActionTypes';

export const addtoCart = (product) => ({
    type: ActionTypes.ADD_TO_CART,
    payload: product
})

export const addCart = (product) => (dispatch) => {
    console.log(product)
    dispatch(addtoCart(product))
}