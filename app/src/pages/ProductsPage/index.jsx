import React from 'react';
import ProductsBlock from '../../components/ProductsBlock';
import { productsReloadAction } from '../../store/reducer/productsReducer';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../components/Product';
import s from './style.module.css';
import { useEffect } from 'react';

export default function ProductsPage() {

    const { cattitle, catid} = useParams();

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(productsReloadAction())        
    // }, [])
    
    const products = useSelector(
        ({products}) => {
            console.log(products);
            if (catid === undefined){                
                return products
            } else {                
                return products.filter(item => item.categoryId === +catid )
                
            }
        }
        );

    const categories = () => {
        if (catid === undefined){
            return <h1>All products</h1>
        } else {
            return <h1>{cattitle}</h1>
        }
    }

  return (
    <div >
        <ProductsBlock />       
        <div className={s.container}>
        {
            products
            .filter(({show}) => Object.values(show).every(item => item))
            .map(item => <Product key={item.id}{...item} />)
        }
        </div>        
        
    </div>
  )
}
