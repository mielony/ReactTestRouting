import React from 'react';
import {getCar} from '../db/carsDB.js';

import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import e404 from '../images/404.png';

const img = [img1, img2, img3];

function Car(props) {
    const car = getCar(props.id);
    return ( 
        // <article calssName="car">
        //     <h1>{car.id}, {car.make}, {car.model} </h1>
        // </article> 
        // <section className="car">
        //     <div className="car-card">
        //         <div className="product-image">
        //             <img src={img1} className="img-fluid" alt="BMW F31" />
        //         </div>
        //         <div className="car-info">
        //             <h5>{car.make} {car.model}</h5>
        //             <h6>....</h6>
        //         </div>
        //     </div>
        // </section>
        <div className="card" style={{width: "42rem"}}>
            <img src={img[car.id]} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{car.make} {car.model}</h5>
                <p className="card-text">{car.engine} with {car.transmission} transmission. <br />Model year: {car.year}</p>
            </div>        
        </div>
    );
}

export default Car;