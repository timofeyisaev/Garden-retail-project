import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { priceFilterAction, productsSortAction, discountLoadAction, productsReloadAction, productsLoadAction } from '../../store/reducer/productsReducer';
import Product from '../Product';
import s from './style.module.css';
import { useParams } from 'react-router-dom';


export default function ProductsBlock() {

  const products = useSelector(state => state.products);

  const dispatch = useDispatch();

  const sortBy = event => {
    const value = event.target.value;
    dispatch(productsSortAction(value))
  }
  

  const discountedItems = event => {
    const check = document.getElementById('checkBox')
    const change = dispatch(discountLoadAction())
    const change2 = dispatch (productsReloadAction())
    if (check.checked === true){
      return change
    } else return change2;
  };

  const onChange = event => {
    const value = event.target.checked;
    const value2 = event.target.uncheked;
    console.log(value);
    dispatch(discountLoadAction(value));
    
  };

  const { cattitle, catid} = useParams();

  const categories = () => {
    if (catid === undefined){
        return <h1 className={s.header}>All products</h1>
    } else {
        return <h1 className={s.header}>{cattitle}</h1>
    }
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
    <div className={s.bigContainer}>        
            {categories()}
            <div>
                <form className={s.form}>
                    <p>Price</p>
                    <input type="number" className={s.fromInput} placeholder='From' onChange={setMinPrice}/>
                    <input type="number" className={s.fromInput} placeholder='To' onChange={setMaxPrice}/>
                    <p>Discounted items</p>
                    <input type="checkbox" className={s.checkBox} onChange={onChange} id='checkBox' />
                    <p>Sorted by</p>
                    <select className={s.selector} placeholder='By default' onChange={sortBy}>
                        <option value="1">By default</option>
                        <option value="2">Price</option>
                        <option value="3">Discount Price</option>
                        <option value="4">Title</option>
                      </select>
                                        
                </form>
            </div>

            

        
    </div>
  )
}
