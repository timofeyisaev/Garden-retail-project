import React from 'react';
import s from './style.module.css';
import { useSelector } from 'react-redux';
import Product from '../Product';

export default function SaleBlock() {

    const products = useSelector(
        ({products}) => {
                return products.filter(item => item.discont_price !== null )
                
        }
        );

  return (
    <div className={s.saleDiv}>
        <h3>Sale</h3>
        <div className={s.container}>
          {
              products
              .slice(0, 4)
              .map(item => <Product key={item.id}{...item} />)
          }
        </div>
        
    </div>
  )
}
