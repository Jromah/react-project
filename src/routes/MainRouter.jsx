import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Item } from '../pages';
import { Navbar } from '../components';

export const MainRouter = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
};