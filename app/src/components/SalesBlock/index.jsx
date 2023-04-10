import React from 'react';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
import { productsSortAction, priceFilterAction, discountLoadAction } from '../../store/reducer/productsReducer';
import { useState, useEffect } from 'react';

export default function SalesBlock() {

    const dispatch = useDispatch();

  const sortBy = event => {
    const value = event.target.value;
    dispatch(productsSortAction(value))
  };

 

  const [price, setPrice] = useState({min: -Infinity, max: Infinity});

  const setMaxPrice = (event) => {
    setPrice( pre => ({
    ...pre, 
    max: +event.target.value || Infinity}))
  };
  

  const setMinPrice = (event) => {
    setPrice(pre => ({...pre, min: +event.target.value || -Infinity}))
  };

  useEffect(() => {
    dispatch(priceFilterAction(price));
  }, [price]);

  return (
    <div>
        <h2 className={s.header}>Discounted Products</h2>
            <div>
                <form className={s.form}>
                    <p>Price</p>
                    <input type="number" className={s.fromInput} placeholder='From' onChange={setMinPrice}/>
                    <input type="number" className={s.fromInput} placeholder='To' onChange={setMaxPrice}/>
                    <p>Sorted by</p>
                    <select className={s.selector} placeholder='By default' onChange={sortBy}>
                        <option value="all">By default</option>
                        <option value="price">Price</option>
                        <option value="discont_price">Discount Price</option>
                        <option value="title">Title</option>
                      </select>
                                        
                </form>
            </div>
    </div>
  )
}
