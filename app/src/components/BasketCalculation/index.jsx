import React from 'react';
import s from './style.module.css';
import { useSelector } from 'react-redux';

export default function BasketCalculation() {

    const {basket, products} = useSelector(state => state);

    const data = basket.map((item) =>{
        const product = products.find(({id}) => id === item.id);
        return {...product, ...item}
    });

    const newPrice = products.filter(item => item.discont_price !== null);
    console.log(newPrice)

    

    // const totalPrice = products.filter(item => item.discont_price !== null)
    // ? data.reduce((acc, {count, price}) =>  acc + count * price, 0)
    // : data.reduce((acc, {count, discont_price}) =>  acc + count * discont_price, 0);

    const totalPrice = data.reduce((acc, {count, discont_price, price}) =>  
    discont_price === null
    ? acc + count * price
    : acc + count * discont_price
    , 0);

  return (
    <div>
         <form action="" className={s.form}>
                <h3>Order details</h3>
                <div className={s.total}>
                    <p>Total amount: </p>
                    <p>$ {totalPrice.toFixed(2)}</p>
                </div>
                <div className={s.phone}>
                    <input type="number" placeholder='Phone number' />
                    <button>Make an order</button>
                </div>
                
      </form> 
    </div>
  )
}
