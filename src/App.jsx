import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/home';

export const App= () => {
  return (
  
    <Routes>
<Route path='/' element={<Home />} exact="true"> 
</Route>
    </Routes>
  )
}