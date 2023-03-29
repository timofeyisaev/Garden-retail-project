const CATEGORIES_LOAD = 'CATEGORIES_LOAD';


export const categoriesLoadAction = (payload) => ({type: CATEGORIES_LOAD, payload});



export const categoryReducer = (state = [], action) => {
    if (action.type === CATEGORIES_LOAD){
        console.log(action.payload);
        return action.payload
    }else return state
}