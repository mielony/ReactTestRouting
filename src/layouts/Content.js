import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage'
import CarsPage from '../pages/CarsPage'
import ContactPage from '../pages/ContactPage'
import AdminPage from '../pages/AdminPage'
import Error404 from '../pages/Error404'

function Content() {
    return (
        <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/cars" element={ <CarsPage /> }/> 
            <Route path="/contact" element={ <ContactPage /> }/> 
            <Route path="/admin"  element={ <AdminPage /> }/> 
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export default Content;