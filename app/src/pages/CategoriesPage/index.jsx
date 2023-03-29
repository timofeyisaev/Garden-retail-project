import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CategoriesBlock from '../../components/CategoriesBlock';
import Product from '../../components/Product';
import CategoryItem from '../../components/CategoryItem';
import s from './style.module.css';

export default function CategoriesPage() {

  const categories = useSelector(state => state.category)



  return (
    <div className={s.container}>
        
        {
            categories.map(item => <CategoryItem key={item.id} {...item} />)
        }
    </div>
  )
}
