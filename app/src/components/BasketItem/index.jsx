import React from 'react';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
import { basketDeleteProductAction, basketIncrementAction } from '../../store/reducer/basketReducer';
import { basketDecrementAction } from '../../store/reducer/basketReducer';


export default function BasketItem({id, image, title, count, price, discont_price}) {

    const dispatch = useDispatch();
    const picture = `http://localhost:3333/${image}`;
    
  

  return (
    
    <div className={s.container}>
            <div className={s.pic}>
                <img src={picture} alt={title} />
            </div>
            <div className={s.btnsContainer}>
                <p>{title}</p>
                <div className={s.btns}>
                    <button onClick={() => dispatch(basketDecrementAction(id)) }>-</button>
                    <p>{count} </p>
                    <button onClick={() => dispatch(basketIncrementAction(id)) }>+</button>
                </div>              
            </div>
            <div className={s.price}>
            $ {
                discont_price === null ? price : discont_price
              }
              
                          
            </div>
            <p className={s.closeIcon} onClick={() => dispatch(basketDeleteProductAction(id))}>X</p>
                       
    </div>


  )
}
