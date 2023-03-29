import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { productsReducer } from "./reducer/productsReducer";
import { categoryReducer } from "./reducer/categoryReducer";
import { basketReducer } from "./reducer/basketReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    category: categoryReducer,
    basket: basketReducer
    
})

export const store = createStore(rootReducer, applyMiddleware(thunk));