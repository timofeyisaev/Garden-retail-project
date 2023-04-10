import React from 'react';
import { useSelector } from 'react-redux';
import BasketItem from '../../components/BasketItem';
import BasketCalculation from '../../components/BasketCalculation';
import s from './style.module.css';
import { Link } from 'react-router-dom';

export default function BasketPage() {

  const {basket, products, price, count, discont_price} = useSelector((state) => state);

  console.log(price, count);
  //Посмотреть, что мы тянем из стейта

  const data = basket.map((item) => {
    const product = products.find (({id}) => id === item.id);
    return {...product, ...item}
});

  const link = '/products/all';

  



  return (
    <div className={s.container}>
      <div className={s.leftContainer}>
        <div className={s.header}>
          <h2>Shopping cart</h2>
          <Link to={link}>Back to the store </Link>
        </div>
        
          {
              data.length === 0
            ? <h3>Your shopping cart is empty!</h3>
            : data.map((item) => <BasketItem key={item.id} {...item} /> )
          }
       
            
      </div>
      <div className={s.basket}>      
          <BasketCalculation />   
      </div>
    
    </div>    
   
  )
}
