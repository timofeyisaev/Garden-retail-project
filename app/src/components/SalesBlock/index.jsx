import React from 'react';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
import { productsSortAction } from '../../store/reducer/productsReducer';

export default function SalesBlock() {

    const dispatch = useDispatch();

  const sortBy = event => {
    const value = event.target.value;
    dispatch(productsSortAction(value))
  };

  return (
    <div>
        <h2 className={s.header}>Discounted Products</h2>
            <div>
                <form className={s.form}>
                    <p>Price</p>
                    <input type="number" className={s.fromInput} placeholder='From'/>
                    <input type="number" className={s.fromInput} placeholder='To'/>
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
