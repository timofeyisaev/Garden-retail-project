import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.css';

export default function CategoryItem({title, image, id}) {
    const link = `/categories/${title}/${id}`;

    console.log(id);

    const picture = `http://localhost:3333/${image}`



  return (
    <Link to={link} className={s.categoryDescr}>
        <img src={picture} alt={title} />
        {title}
    </Link>
  )
}
