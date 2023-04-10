import React from 'react';
import s from './style.module.css';
import { NavLink } from 'react-router-dom';
import BasketItem from '../BasketItem';
import { useSelector } from 'react-redux';
import { useRef } from 'react';



export default function NavBar({count}) {

  const checkClass = ({isActive}) => isActive ? s.active : '';

  const {basket} = useSelector(state => state);

  const totalCount = basket.reduce((acc, {count}) =>  acc + count, 0);

  const nav_links = useRef();

  const navBtnOnClik = () => {
    console.log('_');
    const rightBlock = nav_links.current;
    rightBlock.classList.toggle(s.rightBlock_show);
  }

  return (
    <div className={s.navBar}>
        <div className={s.leftBlock}>
            <NavLink to='/' className={s.logo}></NavLink>            
            <NavLink className={s.catalogue} to='/products/all'>Catalogue</NavLink>   
        </div>
        <div className={s.rightBlock} ref={nav_links}>
            <NavLink className={checkClass} to='/'>Main Page</NavLink>
            <NavLink className={checkClass} to='/products/all'>All Products</NavLink>
            <NavLink className={checkClass} to='/sales/'>All Sales</NavLink> 
            <NavLink className={s.shoppingBag} to='/basket'><div className={s.basketCount}>{totalCount}</div></NavLink>
            
        </div>
        <button className={s.nav_btn} onClick={navBtnOnClik}>=</button>
        
           
        
    </div>
  )
}
