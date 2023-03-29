import React from 'react';
import FirstBlock from '../../components/FirstBlock';
import CatalogueBlock from '../../components/CatalogueBlock';
import DiscountBlock from '../../components/DiscountBlock';
import SaleBlock from '../../components/SaleBlock';
import { useSelector } from 'react-redux';


export default function MainPage() {





  return (
    <div>
        <FirstBlock />
        <CatalogueBlock />
        <DiscountBlock />
        <SaleBlock />
        
    </div>
  )
}
