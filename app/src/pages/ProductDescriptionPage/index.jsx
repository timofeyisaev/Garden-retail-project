import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { basketAddAction } from '../../store/reducer/basketReducer';
import s from './style.module.css';

export default function ProductDescriptionPage() {
    
    const {id} = useParams();    
    const products = useSelector(({products}) => products);
    const product = products.find(item => item.id === +id);

    const picture = `http://localhost:3333/${product.image}`;
    console.log(products);

    const dispatch = useDispatch();

    const diff = 100 - Math.round(product.price / product.discont_price * 100);
    
    
  return (
    <div>
        {
          products.length === 0
          ? <p>Loading data...</p>
          : product.discont_price === null
            ? (<div className={s.card}>
                <h2>{product.title}</h2>
                <div className={s.block}>
                    <img src={picture} alt={product.title} />
                    <div className={s.description}>
                      <p className={s.price}>$ {product.price}</p>
                      <button onClick={() => dispatch({type: 'BASKET_ADD', payload: +id })}>Add to cart</button>
                      <h3>Description:</h3>
                      <p className={s.info}>{product.description}</p>
                    </div>                    
                </div>
                     
              
                </div>
              )
              : (<div className={s.card}>
                <h2>{product.title}</h2>
                <div className={s.block}>
                    <img src={picture} alt={product.title} />
                    <div className={s.description}>
                      <div className={s.priceDescription}>
                        <p className={s.price}>$ {product.discont_price}</p>
                        <p className={s.oldPrice}>${product.price}</p>
                        <p className={s.discount}>{diff}%</p>
                      </div>                      
                      <button onClick={() => dispatch({type: 'BASKET_ADD', payload: +id })}>Add to cart</button>
                      <h3>Description:</h3>
                      <p className={s.info}>{product.description}</p>
                    </div>                    
                </div>
                     
              
                </div>
              )
            
         }
    </div>
  )
}
