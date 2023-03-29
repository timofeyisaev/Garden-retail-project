import React from 'react';
import s from './style.module.css';
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { basketAddAction } from '../../store/reducer/basketReducer';


export default function Product({id, title, price, discont_price, image}) {

  const link = `/product/${id}`;

  const picture = `http://localhost:3333/${image}`;

  const dispatch = useDispatch();
  
  const diff = 100 - Math.round(price / discont_price * 100);
  
  const priceOff = ({price, discont_price}) =>{
    if (discont_price === null){
      return price
    } else  {
      return (
        <div>
          <p>{price}</p>
          <p>{discont_price}</p>
          <p>{diff}</p>
        </div>
          
      )
    }

  };
 
  console.log(priceOff);

  

  return (
    <div className={s.item}>
      <Link to={link}>
          <img src={picture}   alt={title}  />
      </Link>
      <button onClick={() => dispatch({type: 'BASKET_ADD', payload: +id })}>Add to cart</button>    
      {
          discont_price === null
          ? <Link to={link}>
              <div className={s.inscriptionContainer}>
                <p className={s.price}>${price}</p>
                <p className={s.title}>{title}</p>
              </div>            
            </Link>
          
          : (
            <Link to={link}>
            <div className={s.inscriptionContainer2}>
              <div className={s.description}>
                  <p className={s.price}>${discont_price}</p>
                  <p className={s.oldPrice}>${price}</p>
                  <p className={s.discount}>{diff}%</p>
              </div>
              <div>
                  <p className={s.title}>{title}</p> 
              </div>              
              
            </div>
            </Link>
          )
          
        }
          
      
      
        
    </div>
  )
}
