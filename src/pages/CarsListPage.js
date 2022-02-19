import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/CarsListPage.css'
import {getCars} from '../db/carsDB.js';



const CarsListPage = () => {
    const carsDB = getCars();
    const list = carsDB.map(car => (
            <tr key={car.id}>
                <th>{car.id}</th>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td><Link to={`/car/${car.id}`} key={car.id} > Details </Link></td>
            </tr>
     ))


    return ( 
        // <div className="cars">
        //     <nav>
        //     <ul>
        //         {list}
        //     </ul>
        //     </nav>
        //     <Outlet />
        // </div> 
        <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Make</th>
                <th scope="col">Model</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {list}
                <Outlet />
            </tbody>
        </table >
    );
}

export default CarsListPage;