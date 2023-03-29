const defaultProducts = [
    {id: 1,
    title: 'Велосипед',
    price: 45000,
    dicsount: 25
    },
    {id: 2,
      title: 'Велосипед',
      price: 15000,
      dicsount: 35
    },
    {id: 3,
        title: 'Велосипед',
        price: 55000,
        dicsount: 25
    },
   ];

const PRODUCTS_LOAD = 'PRODUCTS_LOAD';
const PRODUCTS_DISCONT = 'PRODUCTS_DISCONT';
const PRODUCTS_SORT = 'PRODUCTS_SORT';
const PRODUCTS_RELOAD = 'PRODUCTS_RELOAD';
const PRICE_FILTER = 'PRICE_FILTER';


export const productsLoadAction = (payload) => ({type: PRODUCTS_LOAD, payload});
export const discountLoadAction = (payload) => ({type: PRODUCTS_DISCONT, payload});
export const productsSortAction = (payload) => ({type: PRODUCTS_SORT, payload});
export const priceFilterAction = (payload) => ({type: PRICE_FILTER, payload});
export const productsReloadAction = (payload) => ({type: PRODUCTS_RELOAD, payload});


//Добавить новое свойство для каждого продукта со значением скидки.

export const productsReducer = (state = [], action) => {
    if (action.type === PRODUCTS_LOAD){
        console.log(action.payload);
        return action.payload.map(item => ({...item, show: {search: true}}))
    } else if (action.type === PRODUCTS_DISCONT){
         return state.find(({discont_price}) => discont_price === action.payload)
    } else if (action.type === PRODUCTS_SORT){
        if (+action.payload === 2){
            state.sort((a, b) => a.price - b.price)
        }else if (+action.payload === 3) {
            state.sort ((a, b) => b.discont_price - a.discont_price)
        }else if (+action.payload === 4){
            state.sort((a, b) => {
                const titleA = a.title.toLowerCase();
                const titleB = b.title.toLowerCase();
                if (titleA < titleB){
                    return -1
                } else return 1
            } )
        }else {
            state.sort((a, b) => b.price - a.price)
        }
        return [...state]

    }else if (action.type === PRODUCTS_RELOAD){
        return state.map(item => ({...item, show: {search: true, price: true} }))
    }else if (action.type === PRICE_FILTER){
        const {min, max} = action.payload;
        const newState = state.map (elem => {elem.show.price =
            elem.price >= min && elem.price <= max;
            return elem
        })
        console.log(newState);
        return newState;
    }else {
        return state
    }
};