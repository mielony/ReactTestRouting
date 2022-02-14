import React from 'react';
import '../styles/Header.css';
import { Route, Routes } from "react-router-dom";

import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import e404 from '../images/404.png';

function Header() {
    return (
        <Routes>
            <Route path="/" element={ <img src={img1} alt="BMW F31" /> }/> 
            <Route path="/cars" element={ <img src={img2} alt="CLA" /> }/> 
            <Route path="/contact" element={ <img src={img3} alt="Superb" /> }/> 
            <Route path="/admin"  element={ <img src={img4} alt="BMW F34" /> }/> 
            <Route path="*" element={<img src={e404} alt="404 Error" />} />
        </Routes>
    );
}

export default Header;