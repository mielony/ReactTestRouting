import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage'
import CarPage from '../pages/CarPage'
import CarsListPage from '../pages/CarsListPage'
import ContactPage from '../pages/ContactPage'
import AdminPage from '../pages/AdminPage'
import Error404 from '../pages/Error404'
import LoginPage from '../pages/LoginPage'

function Content() {
    return (
        <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/cars" element={ <CarsListPage /> } /> 
            <Route path="/car" element={ <CarPage /> } > 
                <Route path=":carsId" element={ <CarPage /> }/> 
            </Route> 
            <Route path="/contact" element={ <ContactPage /> }/> 
            <Route path="/admin"  element={ <AdminPage /> }/> 
            <Route path="/login"  element={ <LoginPage /> }/> 
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export default Content;