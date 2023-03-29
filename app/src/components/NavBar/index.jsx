import React from 'react';
import s from './style.module.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {

  const checkClass = ({isActive}) => isActive ? s.active : '';

  return (
    <div className={s.navBar}>
        <div className={s.leftBlock}>
            <NavLink to='/' className={s.logo}></NavLink>            
            <NavLink className={s.catalogue} to='/products/all'>Catalogue</NavLink>   
        </div>

        <div className={s.rightBlock}>
            <NavLink className={checkClass} to='/'>Main Page</NavLink>
            <NavLink className={checkClass} to='/products/all'>All Products</NavLink>
            <NavLink className={checkClass} to='/sales/'>All Sales</NavLink> 
            <NavLink className={s.shoppingBag} to='/basket'></NavLink>  
            
        </div>
           
        
    </div>
  )
}
