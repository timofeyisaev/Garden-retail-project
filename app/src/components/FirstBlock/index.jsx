import React from 'react';
import s from './style.module.css';
import { Link } from 'react-router-dom';

export default function FirstBlock() {

  const link = '/sales/';

  return (
    <div className={s.block}>
        <div className={s.leftBlock}>
            <div className={s.sale}>Sale</div>
            <div className={s.newSeason}>New season</div>
            <form action="/categories/sales" target="_blank">            
            <Link className={s.salesBtn} to={link} >Sale</Link>
            </form>
            
        </div>
        
        <div className={s.flowerBed}></div>

    </div>
  )
}
