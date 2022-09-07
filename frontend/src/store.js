import {createStore, combineReducers, compose, applyMiddleware}from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productDeleteReducer, productDetailsReducer, productListReducer, productReviewSaveReducer, productSaveReducer } from './reducers/productReducers.js';
import {cartReducer} from './reducers/cartReducers'
import { userRegisterReducer, userSigninReducer, userUpdateReducer } from './reducers/userReducers.js';


const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState={
    cart: { cartItems, shipping: {}, payment: {} },
  userSignin: { userInfo },
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    productReviewSave: productReviewSaveReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    userUpdate: userUpdateReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSIION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;