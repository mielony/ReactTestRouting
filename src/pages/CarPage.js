import React from 'react';
import Car from '../components/Car.js';
import {Link, useParams} from 'react-router-dom';

const CarPage = () => {
    let params = useParams();
    return ( 
        <>
        <div>Car page</div>
        <Car id={params.carsId}/>
        <Link to="/cars">Back to cars list.</Link>
        </>
     );
}

export default CarPage;