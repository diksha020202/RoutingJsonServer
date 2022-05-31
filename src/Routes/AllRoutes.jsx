import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Products from './Products'
import ProductsDetails from './ProductsDetails'

const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}>
            </Route>
            <Route path="/products/:products_id" element={<ProductsDetails />} />
        </Routes>
    </div>
  )
}

export default AllRoutes