import React from 'react';
import s from './style.module.css';

export default function DiscountBlock() {
  return (
    <div className={s.block}>
        <div className={s.gnome}> </div>
        
        <div className={s.rightBlock}>
            <div className={s.rightInscr}>5% off for the first order</div>
            <form action="">
              <input type="text" name="phone" defaultValue='+49' />
              <button>Get a discount</button>
            </form>
            
        </div>

    </div>
  )
}
