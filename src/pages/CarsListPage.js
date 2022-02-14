import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/CarsListPage.css'
import {getCars} from '../db/carsDB.js';



const CarsListPage = () => {
    const carsDB = getCars();
    const list = carsDB.map(car => (
        <li key={car.id} >
            <Link to={`/car/${car.id}`} key={car.id} >{car.make} {car.model} </Link>
        </li>
    ))

    return ( 
        <div className="cars">
            <nav>
            <ul>
                {list}
            </ul>
            </nav>
            <Outlet />
        </div> 
    );
}

export default CarsListPage;