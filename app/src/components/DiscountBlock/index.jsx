import React from 'react';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
import { addPhone } from '../../store/asyncActions/phone';

export default function DiscountBlock() {

  const dispatch = useDispatch();

  const onSubmit = (event) => {
  event.preventDefault();
  const phoneNumber = +event.target.value;
  dispatch(addPhone(phoneNumber));
  event.target.reset();

  }



// async function postData(url = 'http://localhost:3333/sale/send', data = {}){
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Success:", data);
//   })
   
// };


//Пример запроса

// postData("http://localhost:3333/sale/send", { answer: 42 }).then((data) => {
//   console.log(data);
// });

  return (
    <div className={s.block}>
        <div className={s.gnome}> </div>
        
        <div className={s.rightBlock}>
            <div className={s.rightInscr}>5% off for the first order</div>
            <form action="" onSubmit={onSubmit}>
              <input type="text" name="phone" defaultValue='+49' />
              <button >Get a discount</button>
            </form>
            
        </div>

    </div>
  )
}
