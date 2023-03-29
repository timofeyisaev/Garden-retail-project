import { productsLoadAction } from "../reducer/productsReducer";


export const loadProducts = (dispatch) => {
    
    const link = 'http://localhost:3333/products/all';
    fetch(link)
        .then(resp => resp.json())
        .then(json => dispatch(productsLoadAction(json)));

};


// http://localhost:3333/products/all