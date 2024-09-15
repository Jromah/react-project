import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Item, Category } from '../pages';
import { Navbar } from '../components';

export const MainRouter = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/category/:categoryId" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};