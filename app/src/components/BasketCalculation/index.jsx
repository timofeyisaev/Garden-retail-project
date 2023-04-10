import React from 'react';
import s from './style.module.css';
import { useSelector } from 'react-redux';
import { addOrder } from '../../store/asyncActions/order';
import { useDispatch } from 'react-redux';

export default function BasketCalculation() {

    const {basket, products} = useSelector(state => state);

    const dispatch = useDispatch();

    const data = basket.map((item) =>{
        const product = products.find(({id}) => id === item.id);
        return {...product, ...item}
    });

    const newPrice = products.filter(item => item.discont_price !== null);
    console.log(newPrice)


    const totalPrice = data.reduce((acc, {count, discont_price, price}) =>  
    discont_price === null
    ? acc + count * price
    : acc + count * discont_price
    , 0);


//   async function order(url = 'http://localhost:3333/order/send', data = {}){
//     const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Order sent!", data);
//       })
      
// };

// //Пример запроса

// order("http://localhost:3333/order/send", { answer: 42 }).then((data) => {
//   console.log(data);
// });

const onSubmit = (event) => {
  event.preventDefault();
  const phoneNumber = +event.target.value;
  dispatch(addOrder(phoneNumber));
  event.target.reset();
  }


  return (
    <div>
         <form action="" className={s.form} onSubmit={onSubmit}>
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
