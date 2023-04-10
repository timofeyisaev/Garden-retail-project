import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../../components/Product';
import SalesBlock from '../../components/SalesBlock';
import s from './style.module.css';

export default function SalesPage() {


  const products = useSelector(
    ({products}) => {
            return products.filter(item => item.discont_price !== null )
            
    }
    );

    

  return (
    <div>
        <SalesBlock />
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
