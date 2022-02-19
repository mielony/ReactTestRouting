import React from 'react';
import Car from '../components/Car.js';
import {Link, useParams} from 'react-router-dom';

const CarPage = () => {
    let params = useParams();
    return ( 
        <>
        <h1>Car page</h1>
        <Car id={params.carsId}/>
        
        <Link to="/cars">Back to cars list.</Link>
        </>
     );
}

export default CarPage;