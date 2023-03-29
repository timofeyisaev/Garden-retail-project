import React from 'react';
import s from './style.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CategoryItem from '../CategoryItem';

export default function CatalogueBlock() {

    const link = '/categories/';

    const categories = useSelector(state => state.category);



  return (
    <div className={s.genBlock}>
        <div className={s.catalogueDiv}>
            <div className={s.inscription}>Catalogue</div>
            <Link to={link}>All categories</Link>
            
        </div>
        <div className={s.productsContainer}>
        
        {
            categories
            .slice(0, 4)
            .map(item => <CategoryItem key={item.id} {...item} />)
        }
            
        </div>
    </div>
  )
}
