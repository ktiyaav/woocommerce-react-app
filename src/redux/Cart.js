import * as ActionTypes from './ActionTypes';

export const Cart = (state = {
        isLoading: false,
        errMess: null,
        cart: [
            {
                "id": 3162,
                "name": "Crispy Chicken Burger",
                "link": "https://jufy.shaktisaurav.com/product/crispy-chicken-burger/",
                "regularPrice": 120,
                "price": 80,
                "storeName": "FoodieBaaz",
                "image": "https://jufy.shaktisaurav.com/wp-content/uploads/2022/03/Product-9.jpg",
                "qty": 1
            },
            {
                "id": 3160,
                "name": "Black Forest Cake",
                "link": "https://jufy.shaktisaurav.com/product/black-forest-cake/",
                "regularPrice": 330,
                "price": 300,
                "storeName": "FoodieBaaz",
                "image": "https://jufy.shaktisaurav.com/wp-content/uploads/2022/03/Product-8.jpg",
                "qty": 1
            },
            {
                "id": 3164,
                "name": "Samosa (1pc)",
                "link": "https://jufy.shaktisaurav.com/product/samosa-1pc/",
                "regularPrice": 30,
                "price": 25,
                "storeName": "FoodieBaaz",
                "image": "https://jufy.shaktisaurav.com/wp-content/uploads/2022/03/Product-10.jpg",
                "qty": 1
            }
        ],
        total : 405
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_TO_CART:
            const item = state.cart.find(
                product => product.id === action.payload.id,
            );
            
            if (item) {
                return {
                  ...state,
                  cart: state.cart.map(item => item.id === action.payload.id
                    ? {
                      ...item,
                      qty: item.qty + 1,
                    }
                    : item
                  ),
                  total: +state.total + +action.payload.price,
                };
            }
            var product = {
                id : action.payload.id,
                name : action.payload.name,
                link : action.payload.permalink,
                regularPrice: +action.payload.regular_price,
                price: +action.payload.price,
                storeName: action.payload.store.store_name,
                image: action.payload.images[0].src,
                qty: 1
            }
            return {
                ...state,
                cart: [...state.cart, product],
                total: +state.total + +product.price,
            };
        case ActionTypes.CART_LOADING:
            return {...state, isLoading:true, errMess:null};
        
        case ActionTypes.CART_FAILED:
            return {...state, isLoading:false, errMess:action.payload};
            
        default:
            return state;
    }
}