import AddressBlock from '../AddressBlock';
import NavBar from '../NavBar';
import ProductsBlock from '../ProductsBlock';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import BasketPage from '../../pages/BasketPage';
import NotFoundPage from '../../pages/NotFoundPage';
import CategoriesPage from '../../pages/CategoriesPage';
import ProductsPage from '../../pages/ProductsPage';
import ProductDescriptionPage from '../../pages/ProductDescriptionPage';
import SalesPage from '../../pages/SalesPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadProducts } from '../../store/asyncActions/products';
import { loadCategories } from '../../store/asyncActions/categories';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts);
    dispatch(loadCategories)
  },[])

//Нужно подгружать Asyncaction, не reducer

  return (
    <div>      
      <NavBar />
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/basket' element={<BasketPage/>} />       
        <Route path='/products/all' element={<ProductsPage/>} />
        <Route path='/sales/' element={<SalesPage/>} />          
        <Route path='/categories/:cattitle/:catid' element={<ProductsPage />} />
        <Route path='/product/:id' element={<ProductDescriptionPage />}/>
        <Route path='/categories/' element={<CategoriesPage/>} />
        <Route path='/*' element={<NotFoundPage/>} />
      </Routes>
      <AddressBlock />

    </div>
  );
}

export default App;
