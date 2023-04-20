const BASKET_LOAD = 'BASKET_LOAD';

const defaultBasket = [
    
    
]

const BASKET_INCREMENT = 'BASKET_INCREMENT';
const BASKET_DECREMENT = 'BASKET_DECREMENT';
const BASKET_ADD = 'BASKET_ADD';
const BASKET_DELETE_PRODUCT = 'BASKET_DELETE_PRODUCT';
const BASKET_CLEAR = 'BASKET_CLEAR';


export const basketIncrementAction = (payload) => ({type: BASKET_INCREMENT, payload});
export const basketDecrementAction = (payload) => ({type: BASKET_DECREMENT, payload});
export const basketAddAction = (payload) => ({type: BASKET_ADD, payload});
export const basketDeleteProductAction = (payload) => ({type: BASKET_DELETE_PRODUCT, payload});
export const basketClearAction = () => ({type: BASKET_CLEAR});

export const basketLoadAction = (payload) => ({type: BASKET_LOAD, payload});

export const basketReducer = (state = [], action) =>{
    if (action.type === BASKET_LOAD){
        console.log(action.payload)
        return action.payload
} else if (action.type === BASKET_INCREMENT){
    const target = state.find (({id}) => id === action.payload);
    target.count++;
    return [...state]
}else if (action.type === BASKET_DECREMENT){
    const target = state.find (({id}) => id === action.payload);
    if (target.count === 1) {
        return state.filter(({id}) => target.id !== id);
    } else {
        target.count--;
        return [...state]
    }
} else if (action.type === BASKET_ADD){
    const target = state.find (({id}) => id === action.payload);
    if (target === undefined){
        return [...state, {
            id: action.payload,
            count: 1
        }]
    }else {
        target.count++;
        return [...state]
   
    }
} else if (action.type === BASKET_DELETE_PRODUCT){
    return state.filter (({id}) => id !== action.payload);
} else if (action.type === BASKET_CLEAR){
    return [];
} else {
    return state
}
}
