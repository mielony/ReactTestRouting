import React from 'react';
import {getCar} from '../db/carsDB.js';

function Car(props) {
    const car = getCar(props.id);
    return ( 
        <article>
            <h1>{car.id}, {car.make}, {car.model} </h1>
        </article> 
    );
}

export default Car;