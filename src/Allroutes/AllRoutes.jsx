import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart/Cart'
import Home from './Home/Home'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
  )
}

export default AllRoutes
