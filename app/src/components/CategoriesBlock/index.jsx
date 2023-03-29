import React from 'react';
import s from './style.module.css';

export default function CategoriesBlock() {
  return (
    <div className={s.genBlock}>
        <div className={s.categories}>
            <div className={s.inscription}>Categories</div>
        </div>    

            <div className={s.productsContainer}>
                <div className={s.productsDescr}>
                    <div className={s.fertilizer}></div>
                    <p>Fertilizer</p>
                </div>

                <div className={s.productsDescr}>
                    <div className={s.protective}></div>
                    <p className={s.protInsc}>Protective products and septic tanks</p>
                </div>

                <div className={s.productsDescr}>
                    <div className={s.planting}>
                    </div>
                    <p>Planting material</p>
                </div>

                <div className={s.productsDescr}>
                    <div className={s.tools}>
                    </div>
                    <p>Tools and Inventory</p>
                </div>

                <div className={s.productsDescr}>
                    <div className={s.household}>
                    </div>
                    <p>Household Goods</p>
                </div>

                <div className={s.productsDescr}>
                    <div className={s.bbq}>
                    </div>
                    <p>BBQ accessories</p>
                </div>

                <div className={s.productsDescr}>
                    <div className={s.pots}>
                    </div>
                    <p>Garden pots and vases</p>
                </div>

               <div className={s.productsDescr}>
                    <div className={s.accessories}>
                    </div>
                    <p>Garden Accessories</p>
                </div>

                
            </div>
        
    </div>
  )
}
