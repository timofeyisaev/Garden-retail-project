import { categoriesLoadAction } from "../reducer/categoryReducer";


export const loadCategories = (dispatch) => {

    const link = 'http://localhost:3333/categories/all';
    fetch(link)
        .then(resp => resp.json())
        .then(json => dispatch (categoriesLoadAction(json)));
}
