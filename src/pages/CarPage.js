import React from 'react';
import Car from '../components/Car.js';
import {Link, useParams, useNavigate} from 'react-router-dom';

const CarPage = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    let params = useParams();
    return ( 
        <>
        <h1>Car page</h1>
        <Car id={params.carsId}/>
        
        <Link to="/cars">Back to cars list.</Link>
        <br />
        <button onClick={handleBack}>Back done by useNavigate Hook :) </button>
        </>
     );
}

export default CarPage;