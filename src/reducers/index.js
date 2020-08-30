import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import credentials from './credentials';
import newToCartReducer from './newToCartReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter : counterReducer,
    isLogged : isLoggedReducer,
    correctCredentials : credentials,
    newToCart : newToCartReducer
});

export default allReducers;